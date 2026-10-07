"use client";

import Script from "next/script";

export default function ContactForm() {
  return <div className="nr-form">
    <div
      data-tf-live="01K5H3WZNYX5V00EZXDAF1FHDH"
      data-tf-disable-auto-focus="true"
      data-tf-hide-headers="true"
      data-tf-hide-footer="true"
      style={{ width: "100%", height: "100%" }}
    />
    <Script src="https://embed.typeform.com/next/embed.js" strategy="afterInteractive" />
  </div>;
}
