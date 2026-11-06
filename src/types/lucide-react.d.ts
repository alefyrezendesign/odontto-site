declare module "lucide-react" {
  import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

  export type LucideProps = Omit<SVGProps<SVGSVGElement>, "ref"> & {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  };

  export type LucideIcon = ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;

  export const AlertCircle: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const BarChart3: LucideIcon;
  export const Building2: LucideIcon;
  export const Calculator: LucideIcon;
  export const Check: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const Clock: LucideIcon;
  export const Cog: LucideIcon;
  export const CreditCard: LucideIcon;
  export const Eye: LucideIcon;
  export const EyeOff: LucideIcon;
  export const FileText: LucideIcon;
  export const Heart: LucideIcon;
  export const Home: LucideIcon;
  export const Info: LucideIcon;
  export const Landmark: LucideIcon;
  export const Laptop: LucideIcon;
  export const Layers3: LucideIcon;
  export const Lightbulb: LucideIcon;
  export const Lock: LucideIcon;
  export const MapPin: LucideIcon;
  export const Medal: LucideIcon;
  export const Menu: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const Network: LucideIcon;
  export const Phone: LucideIcon;
  export const Plus: LucideIcon;
  export const RefreshCw: LucideIcon;
  export const Send: LucideIcon;
  export const Shield: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Stethoscope: LucideIcon;
  export const Tag: LucideIcon;
  export const Target: LucideIcon;
  export const TrendingDown: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const UserPlus: LucideIcon;
  export const Users: LucideIcon;
  export const UsersRound: LucideIcon;
  export const X: LucideIcon;
}
