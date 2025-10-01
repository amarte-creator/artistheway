"use client"

import { ExitIntentPopup, useExitIntent } from "./exit-intent-popup"

export function ExitIntentProvider({ children }: { children: React.ReactNode }) {
  const { showPopup, closePopup } = useExitIntent()

  return (
    <>
      {children}
      {showPopup && <ExitIntentPopup onClose={closePopup} />}
    </>
  )
}
