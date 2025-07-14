export const TASK_CATEGORIES = [
  {
    id: 'cleaning',
    name: 'Cleaning & Housekeeping',
    nameNl: 'Schoonmaak & Huishouding',
    description: 'House cleaning, deep cleaning, organizing',
    descriptionNl: 'Huisschoonmaak, grondige reiniging, organiseren',
    icon: '🧹',
    color: '#3B82F6'
  },
  {
    id: 'handyman',
    name: 'Handyman & Repairs',
    nameNl: 'Klusjes & Reparaties',
    description: 'Home repairs, furniture assembly, maintenance',
    descriptionNl: 'Huisreparaties, meubelmontage, onderhoud',
    icon: '🔨',
    color: '#F59E0B'
  },
  {
    id: 'gardening',
    name: 'Gardening & Landscaping',
    nameNl: 'Tuinonderhoud & Landschapsarchitectuur',
    description: 'Garden maintenance, lawn care, planting',
    descriptionNl: 'Tuinonderhoud, grasmaaiwerk, planten',
    icon: '🌱',
    color: '#10B981'
  },
  {
    id: 'tech',
    name: 'Tech Support & IT',
    nameNl: 'Technische Ondersteuning & IT',
    description: 'Computer help, software installation, tech support',
    descriptionNl: 'Computerhulp, software-installatie, technische ondersteuning',
    icon: '💻',
    color: '#8B5CF6'
  },
  {
    id: 'cooking',
    name: 'Cooking & Meal Prep',
    nameNl: 'Koken & Maaltijdvoorbereiding',
    description: 'Personal chef, meal preparation, catering',
    descriptionNl: 'Persoonlijke chef, maaltijdvoorbereiding, catering',
    icon: '👨‍🍳',
    color: '#EF4444'
  },
  {
    id: 'childcare',
    name: 'Childcare & Babysitting',
    nameNl: 'Kinderopvang & Oppassen',
    description: 'Babysitting, child supervision, tutoring',
    descriptionNl: 'Oppassen, kindertoezicht, bijles',
    icon: '👶',
    color: '#EC4899'
  },
  {
    id: 'petcare',
    name: 'Pet Care & Walking',
    nameNl: 'Huisdierenverzorging & Uitlaten',
    description: 'Dog walking, pet sitting, grooming',
    descriptionNl: 'Hondenuitlaten, oppassen op huisdieren, verzorging',
    icon: '🐕',
    color: '#F97316'
  },
  {
    id: 'moving',
    name: 'Moving & Delivery',
    nameNl: 'Verhuizen & Bezorging',
    description: 'Moving assistance, furniture delivery, transport',
    descriptionNl: 'Verhuishulp, meubellevering, transport',
    icon: '📦',
    color: '#06B6D4'
  },
  {
    id: 'tutoring',
    name: 'Tutoring & Teaching',
    nameNl: 'Bijles & Onderwijzen',
    description: 'Academic tutoring, language lessons, skill teaching',
    descriptionNl: 'Academische bijles, taallessen, vaardigheidsonderwijs',
    icon: '📚',
    color: '#84CC16'
  },
  {
    id: 'eldercare',
    name: 'Elder Care & Assistance',
    nameNl: 'Ouderenzorg & Hulp',
    description: 'Companion care, shopping assistance, medical support',
    descriptionNl: 'Gezelschapszorg, winkelhulp, medische ondersteuning',
    icon: '👥',
    color: '#A855F7'
  },
  {
    id: 'events',
    name: 'Event Planning & Photography',
    nameNl: 'Evenementen & Fotografie',
    description: 'Event organization, photography, videography',
    descriptionNl: 'Evenementorganisatie, fotografie, videografie',
    icon: '📸',
    color: '#EF4444'
  },
  {
    id: 'other',
    name: 'Other Services',
    nameNl: 'Andere Diensten',
    description: 'Miscellaneous tasks and services',
    descriptionNl: 'Verschillende taken en diensten',
    icon: '⭐',
    color: '#6B7280'
  }
]

export const CURRENCIES = [
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
]

export const EXPERIENCE_LEVELS = [
  { value: 'BEGINNER', label: 'Beginner', labelNl: 'Beginner' },
  { value: 'INTERMEDIATE', label: 'Intermediate', labelNl: 'Gevorderd' },
  { value: 'EXPERT', label: 'Expert', labelNl: 'Expert' },
]

export const TASK_STATUS_OPTIONS = [
  { value: 'OPEN', label: 'Open', labelNl: 'Open', color: '#10B981' },
  { value: 'IN_PROGRESS', label: 'In Progress', labelNl: 'Bezig', color: '#F59E0B' },
  { value: 'COMPLETED', label: 'Completed', labelNl: 'Voltooid', color: '#8B5CF6' },
  { value: 'CANCELLED', label: 'Cancelled', labelNl: 'Geannuleerd', color: '#EF4444' },
  { value: 'DISPUTED', label: 'Disputed', labelNl: 'Geschil', color: '#DC2626' },
]

export const PLATFORM_FEE_PERCENTAGE = 15
export const DEFAULT_CURRENCY = 'EUR'
export const MAX_IMAGES_PER_TASK = 5
export const MAX_TASK_DESCRIPTION_LENGTH = 2000
export const MIN_TASK_PRICE = 5
export const MAX_TASK_PRICE = 10000

export const COUNTRIES = [
  { code: 'NL', name: 'Netherlands', nameNl: 'Nederland' },
  { code: 'BE', name: 'Belgium', nameNl: 'België' },
  { code: 'DE', name: 'Germany', nameNl: 'Duitsland' },
  { code: 'FR', name: 'France', nameNl: 'Frankrijk' },
]