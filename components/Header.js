/* ===== Header (shorter, no border line) ===== */
header {
  @apply fixed top-0 left-0 right-0 z-50 
         bg-black/95 backdrop-blur 
         flex items-center justify-center;
  height: 80px;       /* 10% shorter than 80px (h-20) */
  border: none !important;
}

/* Logo inside header */
header img {
  @apply block;
  width: 90%;        /* 20% wider */
  height: auto;
}

/* Push content below header (match new height) */
main { padding-top: 80px; }
