
import { 
  BookOpen, Globe, Briefcase, PenTool, Megaphone, Code,
  GraduationCap, HeartPulse, Sparkles, Heart, Cpu, Search, List,
  Wand2, Building2, Settings, GitMerge, Hammer, HeartHandshake, Stethoscope, Scale, Landmark,
  Shield, TrendingUp, Home, FlaskConical, Brain, Leaf,
  Layers, Users, Truck, BarChart3, Binary, UserCog, Library, Zap, Newspaper, Palette, Utensils, Wheat
} from 'lucide-react';

export { FlaskConical };

export const CATEGORY_CONFIG = [
  { id: 'all', nameKey: 'categories.all', icon: BookOpen },
  { id: 'favorites', nameKey: 'categories.favorites', icon: Heart },
  { id: 'agriculture', nameKey: 'categories.agriculture', icon: Wheat },
  { id: 'aiengineering', nameKey: 'categories.aiengineering', icon: Binary },
  { id: 'business', nameKey: 'categories.business', icon: Briefcase },
  { id: 'career', nameKey: 'categories.career', icon: UserCog },
  { id: 'climate', nameKey: 'categories.climate', icon: Leaf },
  { id: 'coding', nameKey: 'categories.coding', icon: Code },
  { id: 'creative', nameKey: 'categories.creative', icon: Sparkles },
  { id: 'creativevisual', nameKey: 'categories.creativevisual', icon: Palette },
  { id: 'cybersecurity', nameKey: 'categories.cybersecurity', icon: Shield },
  { id: 'dataanalysis', nameKey: 'categories.dataanalysis', icon: BarChart3 },
  { id: 'education', nameKey: 'categories.education', icon: GraduationCap },
  { id: 'finance', nameKey: 'categories.finance', icon: Landmark },
  { id: 'gov', nameKey: 'categories.gov', icon: Building2 },
  { id: 'health', nameKey: 'categories.health', icon: HeartPulse },
  { id: 'hospitality', nameKey: 'categories.hospitality', icon: Utensils },
  { id: 'hr', nameKey: 'categories.hr', icon: Users },
  { id: 'humanities', nameKey: 'categories.humanities', icon: Library },
  { id: 'journalism', nameKey: 'categories.journalism', icon: Newspaper },
  { id: 'legal', nameKey: 'categories.legal', icon: Scale },
  { id: 'logistics', nameKey: 'categories.logistics', icon: Truck },
  { id: 'marketing', nameKey: 'categories.marketing', icon: Megaphone },
  { id: 'medicine', nameKey: 'categories.medicine', icon: Stethoscope },
  { id: 'ngo', nameKey: 'categories.ngo', icon: HeartHandshake },
  { id: 'product', nameKey: 'categories.product', icon: Layers },
  { id: 'productivity', nameKey: 'categories.productivity', icon: Zap },
  { id: 'psychology', nameKey: 'categories.psychology', icon: Brain },
  { id: 'publichealth', nameKey: 'categories.publichealth', icon: HeartPulse },
  { id: 'realestate', nameKey: 'categories.realestate', icon: Home },
  { id: 'sales', nameKey: 'categories.sales', icon: TrendingUp },
  { id: 'science', nameKey: 'categories.science', icon: FlaskConical },
  { id: 'sustainability', nameKey: 'categories.sustainability', icon: Leaf },
  { id: 'writing', nameKey: 'categories.writing', icon: PenTool },
  { id: 'macedonian', nameKey: 'categories.macedonian', icon: Globe },
  { id: 'albanian', nameKey: 'categories.albanian', icon: Globe },
];

export const CHATBOTS = [
    { name: 'ChatGPT', url: 'https://chatgpt.com/?q=' },
    { name: 'Gemini', url: 'https://gemini.google.com/app?prompt=' },
    { name: 'Claude', url: 'https://claude.ai/new?q=' },
    { name: 'Copilot', url: 'https://copilot.microsoft.com/?q=' },
    { name: 'Perplexity', url: 'https://www.perplexity.ai/?q=' },
];

export const AGENT_CATEGORIES = [
    { id: 'all', nameKey: 'agent_categories.all', icon: Cpu },
    { id: 'favorites', nameKey: 'agent_categories.favorites', icon: Heart },
    { id: 'gov', nameKey: 'agent_categories.gov', icon: Building2 },
    { id: 'sales', nameKey: 'agent_categories.sales', icon: TrendingUp },
    { id: 'research', nameKey: 'agent_categories.research', icon: Search },
    { id: 'writing', nameKey: 'agent_categories.writing', icon: PenTool },
    { id: 'dev', nameKey: 'agent_categories.dev', icon: Code },
    { id: 'product', nameKey: 'agent_categories.product', icon: Layers },
    { id: 'ai', nameKey: 'agent_categories.ai', icon: Binary },
    { id: 'data', nameKey: 'agent_categories.data', icon: BarChart3 },
    { id: 'hr', nameKey: 'agent_categories.hr', icon: Users },
    { id: 'log', nameKey: 'agent_categories.log', icon: Truck },
    { id: 'cyber', nameKey: 'agent_categories.cyber', icon: Shield },
    { id: 'realestate', nameKey: 'agent_categories.realestate', icon: Home },
    { id: 'science', nameKey: 'agent_categories.science', icon: FlaskConical },
    { id: 'psych', nameKey: 'agent_categories.psych', icon: Brain },
    { id: 'eco', nameKey: 'agent_categories.eco', icon: Leaf },
    { id: 'files', nameKey: 'agent_categories.files', icon: List },
    { id: 'utility', nameKey: 'agent_categories.utility', icon: Wand2 },
    { id: 'ngo', nameKey: 'agent_categories.ngo', icon: Landmark },
    { id: 'business', nameKey: 'agent_categories.business', icon: Briefcase },
    { id: 'marketing', nameKey: 'agent_categories.marketing', icon: Megaphone },
    { id: 'edu', nameKey: 'agent_categories.edu', icon: GraduationCap },
    { id: 'pmo', nameKey: 'agent_categories.pmo', icon: Settings },
    { id: 'health', nameKey: 'agent_categories.health', icon: HeartPulse },
    { id: 'creative', nameKey: 'agent_categories.creative', icon: Sparkles },
];

export const LANGUAGES = [
    { code: 'en', label: 'EN', flag: 'EN' },
    { code: 'mk', label: 'MK', flag: 'MK' },
    { code: 'sq', label: 'AL', flag: 'AL' }
];

export const NAV_CONFIG = [
    { href: 'index.html', labelKey: 'nav.prompts', icon: BookOpen, id: 'prompts' },
    { href: 'agents.html', labelKey: 'nav.agents', icon: Cpu, id: 'agents' },
    { href: 'playbooks.html', labelKey: 'nav.situations', icon: Sparkles, id: 'playbooks' },
    { href: 'builder.html', labelKey: 'nav.builder', icon: Hammer, id: 'builder' }
];

export const NAV_LINKS = NAV_CONFIG.map(n => ({...n, label: n.id}));

export const APP_VERSION = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '0.5.0';
