/* Icons used by the Community Care Partner page.
   Inline SVG symbol sprite, ported from the static page. The two pages define
   some symbols (i-partner, i-checkin, i-encourage) with different artwork, so
   each page keeps its own sprite rather than sharing one. */

export default function PartnerIconSprite() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
    <defs>
      <symbol id="i-car" viewBox="0 0 24 24"><path d="M3 15l1.5-5A2 2 0 0 1 6.4 8.5h11.2A2 2 0 0 1 19.5 10L21 15"/><path d="M3 15h18v3a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1H6.5v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><circle cx="7.5" cy="15" r="1.4"/><circle cx="16.5" cy="15" r="1.4"/></symbol>
      <symbol id="i-meal" viewBox="0 0 24 24"><path d="M7 3v7M5 3v7M9 3v7M7 10v11"/><path d="M17 3c-2 0-3 2-3 4.5S16 12 17 12s2-1.5 2-4.5S19 3 17 3z"/><path d="M17 12v9"/></symbol>
      <symbol id="i-pill" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="9" transform="rotate(45 12 12)"/><path d="M12 3v18"/></symbol>
      <symbol id="i-checkin" viewBox="0 0 24 24"><path d="M21 12a8 8 0 1 1-3.6-6.7"/><path d="M13 8v4l3 2"/></symbol>
      <symbol id="i-encourage" viewBox="0 0 24 24"><path d="M7 11v9H4v-9z"/><path d="M7 11l3-7c1 0 2 1 2 2v4h6a2 2 0 0 1 2 2l-1.5 6a2 2 0 0 1-2 1.5H9"/></symbol>
      <symbol id="i-home" viewBox="0 0 24 24"><path d="M3 11l9-7 9 7"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-9"/></symbol>
      <symbol id="i-apply" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 8h6M9 12h6M9 16h4"/></symbol>
      <symbol id="i-secure" viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/></symbol>
      <symbol id="i-match" viewBox="0 0 24 24"><circle cx="7" cy="12" r="3.2"/><circle cx="17" cy="12" r="3.2"/><path d="M10 12h4"/></symbol>
      <symbol id="i-partner" viewBox="0 0 24 24"><path d="M12 20s-7-4.4-9.3-8.8C1.4 8.6 3 5.5 6 5c2-.3 3.6.8 4.5 2.2C11.4 5.8 13 4.7 15 5c3 .5 4.6 3.6 3.3 6.2C16 15.6 12 20 12 20z"/></symbol>
    </defs>
    </svg>

  );
}
