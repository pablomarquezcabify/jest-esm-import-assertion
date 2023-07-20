import disposableEmailDomains from "disposable-email-domains/index.json" assert { type: "json" };

export function getDomains() {
  return disposableEmailDomains;
}
