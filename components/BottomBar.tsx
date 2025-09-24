"use client";
import Link from "next/link";
import HomeIcon from "@/components/icons/HomeIcon";
import DubularCoin from "@/components/icons/DubularCoin";
          <li key={href}>
            <Link
              href={href}
              className="flex flex-col items-center gap-1 px-2 py-1"
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
