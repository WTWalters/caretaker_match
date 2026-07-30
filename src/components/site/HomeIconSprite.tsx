/* Icons used by the homepage ecosystem diagram.
   Inline SVG symbol sprite, ported from the static page. The two pages define
   some symbols (i-partner, i-checkin, i-encourage) with different artwork, so
   each page keeps its own sprite rather than sharing one. */

export default function HomeIconSprite() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
    <defs>
      <symbol id="i-hospital" viewBox="0 0 24 24"><path d="M4 21V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v15"/><path d="M9 21v-5h6v5"/><path d="M12 8v5M9.5 10.5h5"/></symbol>
      <symbol id="i-org" viewBox="0 0 24 24"><circle cx="8" cy="9" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 20c0-3 2.5-5 5-5s5 2 5 5"/><path d="M13.5 15.2c2-.3 4 .9 4.5 3.3"/></symbol>
      <symbol id="i-physician" viewBox="0 0 24 24"><path d="M8 3v4a4 4 0 0 0 8 0V3"/><path d="M8 6H6a1 1 0 0 0-1 1v3a5 5 0 0 0 10 0"/><circle cx="18" cy="16" r="3"/><path d="M6 12v2a4 4 0 0 0 4 4h2"/></symbol>
      <symbol id="i-partner" viewBox="0 0 24 24"><path d="M12 20s-7-4.4-9.3-8.8C1.4 8.6 3 5.5 6 5c2-.3 3.6.8 4.5 2.2C11.4 5.8 13 4.7 15 5c3 .5 4.6 3.6 3.3 6.2C16 15.6 12 20 12 20z"/><path d="M8 12l2 2 4-4"/></symbol>
      <symbol id="i-home" viewBox="0 0 24 24"><path d="M3 11l9-7 9 7"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-9"/></symbol>
      <symbol id="i-homecare" viewBox="0 0 24 24"><path d="M3 11l9-7 9 7"/><path d="M5 10v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9"/><path d="M12 12.2c-.6-.9-1.9-.9-2.3.1-.4.9.2 1.7 2.3 3 2.1-1.3 2.7-2.1 2.3-3-.4-1-1.7-1-2.3-.1z" fill="currentColor" stroke="none"/></symbol>
      <symbol id="i-car" viewBox="0 0 24 24"><path d="M3 15l1.5-5A2 2 0 0 1 6.4 8.5h11.2A2 2 0 0 1 19.5 10L21 15"/><path d="M3 15h18v3a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1H6.5v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><circle cx="7.5" cy="15" r="1.4"/><circle cx="16.5" cy="15" r="1.4"/></symbol>
      <symbol id="i-meal" viewBox="0 0 24 24"><path d="M7 3v7M5 3v7M9 3v7M7 10v11"/><path d="M17 3c-2 0-3 2-3 4.5S16 12 17 12s2-1.5 2-4.5S19 3 17 3z"/><path d="M17 12v9"/></symbol>
      <symbol id="i-bag" viewBox="0 0 24 24"><path d="M6 8h12l1 12H5z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></symbol>
      <symbol id="i-checkin" viewBox="0 0 24 24"><path d="M4 4h16v12H8l-4 4z"/><path d="M8 9h8M8 12h5"/></symbol>
      <symbol id="i-encourage" viewBox="0 0 24 24"><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/><path d="M8 14c1 1.2 2.4 2 4 2s3-.8 4-2"/><circle cx="12" cy="12" r="9"/></symbol>
      <symbol id="i-assess" viewBox="0 0 24 24"><path d="M9 3h6l1 3H8z"/><path d="M8 6H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2"/><path d="M9 12l2 2 4-4"/></symbol>
      <symbol id="i-match" viewBox="0 0 24 24"><circle cx="7" cy="12" r="3.2"/><circle cx="17" cy="12" r="3.2"/><path d="M10 12h4"/></symbol>
      <symbol id="i-check" viewBox="0 0 24 24"><path d="M4 12l5 5 11-11"/></symbol>
      <symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 20s-7-4.4-9.3-8.8C1.4 8.6 3 5.5 6 5c2-.3 3.6.8 4.5 2.2C11.4 5.8 13 4.7 15 5c3 .5 4.6 3.6 3.3 6.2C16 15.6 12 20 12 20z"/></symbol>
      <symbol id="i-brain" viewBox="0 0 24 24"><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5h-1a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></symbol>
      <symbol id="i-mobile" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></symbol>
      <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/></symbol>
      <symbol id="i-chart" viewBox="0 0 24 24"><path d="M4 20V10M11 20V4M18 20v-7"/><path d="M3 20h18"/></symbol>
    </defs>
    </svg>

  );
}
