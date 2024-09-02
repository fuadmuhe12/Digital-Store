import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent | KeyboardEvent | WheelEvent;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: Event) => void
) => {
    useEffect(() => {
        const listener = (event: Event) => {
            const el = ref?.current;
            if (event.type === "keydown" && (event as KeyboardEvent).key === "Escape") {
                handler(event);
                return;
            }
            if (event.type === "wheel") {
                handler(event);
                return;
            }
            if (!el || el.contains((event?.target as Node) || null)) {
                return;
            }
            handler(event); // Call the handler only if the click is outside of the element passed.
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        document.addEventListener("keydown", listener);
        document.addEventListener("wheel", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
            document.removeEventListener("keydown", listener);
            document.removeEventListener("wheel", listener);
        };
    }, [ref, handler]); // Reload only if ref or handler changes
};