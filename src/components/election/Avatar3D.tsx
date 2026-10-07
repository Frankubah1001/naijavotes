import React, { useEffect, useRef } from "react";
import type { AvatarStyle } from "@/lib/election/avatars";

interface Avatar3DProps {
  avatar: AvatarStyle;
  size?: number;
  interactive?: boolean;
  animated?: boolean;
  actionState?: "idle" | "walking" | "voting" | "celebrating" | "fined";
}

export function Avatar3D({
  avatar,
  size = 140,
  interactive = true,
  animated = true,
  actionState = "idle",
}: Avatar3DProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rotRef = useRef<{ y: number; pitch: number; isDragging: boolean; lastX: number; lastY: number }>({
    y: 0.15,
    pitch: 0.1,
    isDragging: false,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const render = () => {
      time += 0.03;
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 + 10;
      const baseScale = size / 160;

      // Auto rotation wobble or idle breathing
      const idleFloat = animated ? Math.sin(time * 2) * 3 : 0;
      const walkBob = actionState === "walking" ? Math.abs(Math.sin(time * 6)) * 8 : 0;
      const rotY = rotRef.current.y + (actionState === "celebrating" ? Math.sin(time * 4) * 0.4 : 0);
      const pitch = rotRef.current.pitch;

      ctx.save();
      ctx.translate(centerX, centerY - idleFloat + walkBob);
      ctx.scale(baseScale, baseScale);

      // --- 3D Shadow Base ---
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(0, 56, 36, 12, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,0,0,0.18)";
      ctx.fill();
      ctx.restore();

      // --- Body / Clothes (3D Cylinder/Prism look with Shading) ---
      const bodyGrad = ctx.createLinearGradient(-26, 0, 26, 0);
      bodyGrad.addColorStop(0, shadeColor(avatar.outfitColor, -35));
      bodyGrad.addColorStop(0.35, avatar.outfitColor);
      bodyGrad.addColorStop(0.8, shadeColor(avatar.outfitColor, 20));
      bodyGrad.addColorStop(1, shadeColor(avatar.outfitColor, -40));

      // Torso / Agbada / Traditional wear
      ctx.beginPath();
      if (avatar.accessory === "agbada") {
        // Broad shoulders
        ctx.moveTo(-36, 6);
        ctx.lineTo(36, 6);
        ctx.lineTo(26, 50);
        ctx.lineTo(-26, 50);
      } else {
        ctx.roundRect(-22, 6, 44, 46, [8, 8, 4, 4]);
      }
      ctx.closePath();
      ctx.fillStyle = bodyGrad;
      ctx.fill();
      ctx.strokeStyle = "rgba(0,0,0,0.2)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Collar / V-neck detail
      ctx.beginPath();
      ctx.moveTo(-10, 6);
      ctx.lineTo(0, 22);
      ctx.lineTo(10, 6);
      ctx.strokeStyle = shadeColor(avatar.outfitColor, 40);
      ctx.lineWidth = 3;
      ctx.stroke();

      // Green & White Civic Ribbon / Badge or NYSC Badge
      ctx.beginPath();
      ctx.arc(-10, 24, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#008751"; // Nigerian Flag Green
      ctx.fill();
      ctx.beginPath();
      ctx.arc(-10, 24, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();

      // Arms with 3D pose
      const armSwing = actionState === "walking" ? Math.sin(time * 6) * 12 : 0;
      const celebrateArm = actionState === "celebrating" ? -22 : 0;

      // Left Arm
      ctx.save();
      ctx.translate(-26, 12);
      ctx.rotate((-rotY * 0.2) + (armSwing * Math.PI) / 180 + celebrateArm * 0.05);
      ctx.fillStyle = bodyGrad;
      ctx.beginPath();
      ctx.roundRect(-7, 0, 14, 34, 7);
      ctx.fill();
      // Left Hand
      ctx.beginPath();
      ctx.arc(0, 36, 6, 0, Math.PI * 2);
      ctx.fillStyle = avatar.skinTone;
      ctx.fill();
      ctx.restore();

      // Right Arm (Holding PVC or Voting Ink)
      ctx.save();
      ctx.translate(26, 12);
      ctx.rotate((rotY * 0.2) - (armSwing * Math.PI) / 180 - celebrateArm * 0.05);
      ctx.fillStyle = bodyGrad;
      ctx.beginPath();
      ctx.roundRect(-7, 0, 14, 34, 7);
      ctx.fill();
      // Right Hand
      ctx.beginPath();
      ctx.arc(0, 36, 6, 0, Math.PI * 2);
      ctx.fillStyle = avatar.skinTone;
      ctx.fill();

      // PVC Card in hand!
      ctx.save();
      ctx.translate(2, 36);
      ctx.rotate(-0.3);
      ctx.fillStyle = "#0284C7"; // PVC Blue
      ctx.fillRect(0, -6, 15, 10);
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(2, -4, 4, 6); // photo placeholder
      ctx.fillStyle = "#38BDF8";
      ctx.fillRect(7, -4, 6, 2);
      ctx.restore();

      ctx.restore();

      // --- Neck ---
      ctx.beginPath();
      ctx.roundRect(-7, -4, 14, 14, 4);
      ctx.fillStyle = shadeColor(avatar.skinTone, -20);
      ctx.fill();

      // --- Head Sphere (3D Shaded) ---
      const headX = Math.sin(rotY) * 6;
      const headY = -28 + pitch * 10;
      const headGrad = ctx.createRadialGradient(
        headX - 6,
        headY - 8,
        4,
        headX,
        headY,
        28
      );
      headGrad.addColorStop(0, shadeColor(avatar.skinTone, 25));
      headGrad.addColorStop(0.6, avatar.skinTone);
      headGrad.addColorStop(1, shadeColor(avatar.skinTone, -30));

      ctx.save();
      ctx.beginPath();
      ctx.arc(headX, headY, 23, 0, Math.PI * 2);
      ctx.fillStyle = headGrad;
      ctx.shadowColor = "rgba(0,0,0,0.15)";
      ctx.shadowBlur = 6;
      ctx.shadowOffsetY = 4;
      ctx.fill();
      ctx.restore();

      // --- Hair / Headwear Accessories ---
      if (avatar.accessory === "hijab") {
        ctx.save();
        ctx.beginPath();
        ctx.arc(headX, headY - 2, 25, 0, Math.PI * 2);
        ctx.fillStyle = avatar.outfitColor;
        ctx.fill();
        // Inner face oval cut
        ctx.beginPath();
        ctx.ellipse(headX, headY + 2, 14, 17, 0, 0, Math.PI * 2);
        ctx.fillStyle = headGrad;
        ctx.fill();
        ctx.restore();
      } else if (avatar.accessory === "headwrap") {
        // Nigerian Gele / Wrap
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(headX, headY - 14, 28, 14, 0.1, 0, Math.PI * 2);
        ctx.fillStyle = shadeColor(avatar.outfitColor, 20);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(headX, headY - 18, 24, 10, -0.1, 0, Math.PI * 2);
        ctx.fillStyle = avatar.outfitColor;
        ctx.fill();
        ctx.restore();
      } else if (avatar.accessory === "cap" || avatar.accessory === "agbada") {
        // Traditional Fila / NYSC Cap
        const capC = avatar.capColor || "#FFFFFF";
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(headX, headY - 16, 22, 11, 0.15, 0, Math.PI * 2);
        ctx.fillStyle = capC;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(headX + 6, headY - 20, 10, 0, Math.PI * 2);
        ctx.fillStyle = shadeColor(capC, -15);
        ctx.fill();
        ctx.restore();
      } else {
        // Standard Hair
        ctx.save();
        ctx.beginPath();
        ctx.arc(headX, headY - 6, 23.5, Math.PI * 0.8, Math.PI * 2.2);
        ctx.fillStyle = avatar.hairColor;
        ctx.fill();
        ctx.restore();
      }

      // --- Facial Features (Eyes, Eyebrows, Smile, Glasses) ---
      const eyeOffsetX = Math.sin(rotY) * 4;
      const leftEyeX = headX - 8 + eyeOffsetX;
      const rightEyeX = headX + 8 + eyeOffsetX;
      const eyeY = headY - 1;

      // Eyebrows
      ctx.fillStyle = "#1A1A1A";
      ctx.fillRect(leftEyeX - 4, eyeY - 6, 8, 2);
      ctx.fillRect(rightEyeX - 4, eyeY - 6, 8, 2);

      // Eyes (White + Pupil + Sparkle)
      [leftEyeX, rightEyeX].forEach((ex) => {
        ctx.beginPath();
        ctx.arc(ex, eyeY, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ex + Math.sin(rotY) * 1.2, eyeY, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "#1A1108";
        ctx.fill();
        // Eye shine
        ctx.beginPath();
        ctx.arc(ex - 0.8, eyeY - 0.8, 0.7, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
      });

      // Glasses
      if (avatar.accessory === "glasses") {
        ctx.strokeStyle = "#1A1A1A";
        ctx.lineWidth = 1.8;
        ctx.strokeRect(leftEyeX - 6, eyeY - 4, 11, 8);
        ctx.strokeRect(rightEyeX - 5, eyeY - 4, 11, 8);
        ctx.beginPath();
        ctx.moveTo(leftEyeX + 5, eyeY);
        ctx.lineTo(rightEyeX - 5, eyeY);
        ctx.stroke();
      }

      // Nose
      ctx.beginPath();
      ctx.arc(headX + eyeOffsetX, headY + 5, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = shadeColor(avatar.skinTone, -25);
      ctx.fill();

      // Mouth / Smile or Expression
      ctx.beginPath();
      if (actionState === "fined") {
        // Sad / shocked
        ctx.arc(headX + eyeOffsetX, headY + 14, 5, Math.PI, Math.PI * 2);
        ctx.strokeStyle = "#3A1A1A";
        ctx.lineWidth = 2;
        ctx.stroke();
      } else {
        // Confident Smile
        ctx.arc(headX + eyeOffsetX, headY + 8, 7, 0.2, Math.PI - 0.2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
        ctx.strokeStyle = "#7A2E2E";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Purple Indelible Ink on left index finger if voted!
      if (actionState === "voting" || actionState === "celebrating") {
        ctx.beginPath();
        ctx.arc(headX + 18, headY + 28, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#6B21A8"; // Indelible purple INEC ink
        ctx.fill();
      }

      ctx.restore();

      if (animated) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [avatar, size, animated, actionState]);

  // Pointer drag to spin avatar in 3D
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!interactive) return;
    rotRef.current.isDragging = true;
    rotRef.current.lastX = e.clientX;
    rotRef.current.lastY = e.clientY;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!rotRef.current.isDragging) return;
    const dx = e.clientX - rotRef.current.lastX;
    const dy = e.clientY - rotRef.current.lastY;
    rotRef.current.y += dx * 0.015;
    rotRef.current.pitch = Math.max(-0.3, Math.min(0.3, rotRef.current.pitch + dy * 0.01));
    rotRef.current.lastX = e.clientX;
    rotRef.current.lastY = e.clientY;
  };

  const handlePointerUp = () => {
    rotRef.current.isDragging = false;
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center select-none"
      style={{ width: size, height: size + 20 }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <canvas
        ref={canvasRef}
        width={size * 1.6}
        height={(size + 20) * 1.6}
        style={{ width: size, height: size + 20, cursor: interactive ? "grab" : "default" }}
      />
      {interactive && (
        <span className="text-[10px] text-muted tracking-tight -mt-1 opacity-70">
          ↔ Drag 3D Avatar
        </span>
      )}
    </div>
  );
}

function shadeColor(color: string, percent: number) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = Math.min(255, Math.max(0, Math.round((R * (100 + percent)) / 100)));
  G = Math.min(255, Math.max(0, Math.round((G * (100 + percent)) / 100)));
  B = Math.min(255, Math.max(0, Math.round((B * (100 + percent)) / 100)));

  const RR = R.toString(16).padStart(2, "0");
  const GG = G.toString(16).padStart(2, "0");
  const BB = B.toString(16).padStart(2, "0");

  return `#${RR}${GG}${BB}`;
}
