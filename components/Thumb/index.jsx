// components/Thumb.jsx
import Thumb from"./Thumb/Thumb";

export default function ThumbnailCard({
 title,
 image,
 href ="#",
 live = false,
 color ="pink", //"pink" |"blue" |"red"
 square = false,
 priority = false,
}) {
 const glow = live ?"red" : color ==="blue" ?"cyan" :"dual";
 return (
 <Thumb
 title={title}
 image={image}
 href={href}
 live={live}
 glow={glow}
 square={square}
 priority={priority}
 />
 );
}
