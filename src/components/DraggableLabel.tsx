import React, { useCallback, useEffect, useRef, useState } from "react";

const DraggableLabel = ({ value, setValue, label, className }: any) => {
  const [snapshot, setSnapshot] = useState(value);
  const [active, setActive] = useState(false);
  const draggableRef = useRef<any>(null);
  const onStart = useCallback(
    (event) => {
      setActive(true);
      setSnapshot(value);
    },
    [value]
  );
  useEffect(() => {
    const onUpdate = (event: any) => {
      const direction = event.movementX > 0 ? "right" : "left";

      if (active) {
        if (direction === "right") {
          const diff = snapshot + 1;
          setValue(diff < 10 ? diff : 10);
          setSnapshot(diff < 10 ? diff : 10);
        }
        if (direction === "left") {
          const diff = snapshot - 1;
          setValue(diff > 0 ? diff : 1);
          setSnapshot(diff > 0 ? diff : 1);
        }
      }
    };
    const onEnd = () => {
      setActive(false);
    };

    if (draggableRef?.current) {
      draggableRef.current.addEventListener("mousemove", onUpdate);
      draggableRef.current.addEventListener("mouseup", onEnd);
      draggableRef.current.addEventListener("mouseleave", onEnd);
    }
    return () => {
      if (draggableRef?.current) {
        draggableRef.current.removeEventListener("mousemove", onUpdate);
        draggableRef.current.removeEventListener("mouseup", onEnd);
        draggableRef.current.removeEventListener("mouseleave", onEnd);
      }
    };
  }, [active, setValue, snapshot]);

  return (
    <span
      ref={draggableRef}
      onMouseDown={onStart}
      style={{
        cursor: "ew-resize",
        userSelect: "none",
      }}
      className={className}
    >
      {label}
    </span>
  );
};
export default DraggableLabel;
