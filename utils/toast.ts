import type { ToastMessageOptions } from "primevue/toast";
import type { ToastServiceMethods } from "primevue/toastservice";

type CustomToastMessageOptions = ToastMessageOptions & {
  meta: {
    level?: string;
  };
};

export function showtoast(
  toast: ToastServiceMethods,
  detail: string,
  level?: "success" | "info" | "warn" | "error",
) {
  const message: CustomToastMessageOptions = {
    life: 1000,
    detail,
    severity: "custom",
    meta: { level },
  };

  toast.add(message);
}

export function showtoastsuccess(
  toast: ToastServiceMethods,
  t: (key: string) => string,
) {
  const message: CustomToastMessageOptions = {
    life: 1000,
    detail: t("Success"),
    severity: "custom",
    meta: { level: "success" },
  };

  toast.add(message);
}

export function showtoasterror(
  toast: ToastServiceMethods,
  t: (key: string) => string,
) {
  const message: CustomToastMessageOptions = {
    life: 1000,
    detail: t("Error"),
    severity: "custom",
    meta: { level: "error" },
  };

  toast.add(message);
}
