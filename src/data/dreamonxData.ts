import { BlogPost, ErpModule, IndustryItem, PricingPlan, TestimonialItem, VideoTutorial } from '../types';

export const ERP_MODULES: ErpModule[] = [
  {
    id: 'accounts-finance',
    title: 'Account Management',
    shortDesc: 'Effortlessly manage your financial accounts, track transactions, and generate reports.',
    fullDesc: 'Comprehensive double-entry financial accounting tailored for Pakistani tax laws and international standards. Chart of accounts, general ledger, trial balance, profit & loss, balance sheet, and bank reconciliation.',
    icon: 'Wallet',
    link: '/services/accounts-finance',
    tag: 'Core Financials',
    features: [
      'Multi-Currency & Bank Reconciliation',
      'Real-time Profit & Loss and Balance Sheets',
      'Automated Ledger Posting & Audit Trail',
      'FBR Withholding Tax (WHT) calculations'
    ]
  },
  {
    id: 'purchase-management',
    title: 'Purchase Management',
    shortDesc: 'Streamline your purchasing process with automated workflows and detailed tracking.',
    fullDesc: 'Control every rupee you spend with supplier quotation comparisons, purchase orders, goods receipt notes (GRN), landed costs, and vendor payment aging.',
    icon: 'ShoppingCart',
    link: '/services/purchase-management',
    tag: 'Procurement',
    features: [
      'Purchase Requisition & Order Workflows',
      'Goods Receipt Notes (GRN) Verification',
      'Supplier Ledger & Payment Tracking',
      'Landed Cost & Custom Duty Allocation'
    ]
  },
  {
    id: 'sales-management',
    title: 'Sales Management',
    shortDesc: 'Manage sales operations, track customer interactions, and close deals efficiently.',
    fullDesc: 'Boost sales velocity from initial quotation to final invoice and collection. Seamless pipeline visibility, discount control, customer credit limits, and delivery challans.',
    icon: 'TrendingUp',
    link: '/services/sales-management',
    tag: 'Revenue Engine',
    features: [
      'Multi-tier Customer Pricing & Discounts',
      'Credit Limit Validation & Aging Alerts',
      'Sales Order to Delivery Challan Flow',
      'Sales Rep Commission & Performance Stats'
    ]
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management',
    shortDesc: 'Keep your inventory organized, track stock levels, and receive real-time updates.',
    fullDesc: 'Always know what you have across multiple warehouses, shops, and transit points. Batch tracking, expiry alerts, barcode scanning, and automated reorder triggers.',
    icon: 'Boxes',
    link: '/services/inventory-management',
    tag: 'Stock Control',
    features: [
      'Multi-warehouse & Location Transfer Tracking',
      'Batch, Lot, & Expiry Date Management',
      'Barcode & QR Label Printing and Scanning',
      'Automated Low Stock & Dead Stock Alerts'
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management',
    shortDesc: 'Plan, execute, and monitor projects to ensure they stay on track with timely progress updates.',
    fullDesc: 'Keep projects on schedule and within budget. Milestone tracking, task assignment, resource allocation, and direct project-wise cost accounting.',
    icon: 'FolderKanban',
    link: '/services/project-management',
    tag: 'Execution',
    features: [
      'Milestone & Task Dependency Tracking',
      'Project-specific Income & Expense Ledgers',
      'Material & Labor Cost Allocation',
      'Client Progress Billing & Invoicing'
    ]
  },
  {
    id: 'hr-payroll',
    title: 'HR Management',
    shortDesc: 'Handle employee records, manage payroll, and streamline HR processes for better productivity.',
    fullDesc: 'Pay your people right every single time. Biometric attendance integration, leave management, automated salary slips, allowances, deductions, and EOBI/social security calculations.',
    icon: 'Users',
    link: '/services/hr-payroll',
    tag: 'Workforce',
    features: [
      'Biometric Machine Integration & Attendance',
      'Automated Salary Generation & Payslips',
      'Leave Management & Shift Scheduling',
      'Provident Fund, EOBI & Advance Tracking'
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    shortDesc: 'Manage production processes, material consumption, and manufacturing operations efficiently.',
    fullDesc: 'Produce more, waste less with complete Bill of Materials (BOM), work orders, scrap tracking, overhead costing, and batch quality control.',
    icon: 'Factory',
    link: '/services/manufacturing',
    tag: 'Production',
    features: [
      'Multi-level Bill of Materials (BOM)',
      'Work Order Scheduling & Stage Tracking',
      'Raw Material Issuance & Scrap Management',
      'Per-Unit Finished Goods Costing'
    ]
  },
  {
    id: 'pos-point-of-sale',
    title: 'POS / Point of Sale',
    shortDesc: 'Speed up billing, manage retail sales, and keep your point-of-sale operations connected.',
    fullDesc: 'Fast checkout, happy customers. High-speed retail billing interface supporting barcode scanners, thermal receipt printers, cash drawers, split payments, and offline capability.',
    icon: 'Store',
    link: '/services/pos-point-of-sale',
    tag: 'Retail Billing',
    features: [
      'Split-second Barcode Checkout & Shortcuts',
      'Works 100% Offline with Auto Cloud Sync',
      'Thermal Printer & Customer Display Support',
      'Daily Cash Register Closing & Shift Reports'
    ]
  },
  {
    id: 'fbr-pra-e-invoicing',
    title: 'FBR/PRA E-Invoicing',
    shortDesc: 'Simplify digital invoicing and manage FBR and PRA compliance requirements efficiently.',
    fullDesc: 'Officially integrated digital invoicing system compliant with Federal Board of Revenue (FBR) IRIS / Digital Invoicing System (DIS) and Punjab Revenue Authority (PRA). Instant QR codes and real-time tax validation.',
    icon: 'ShieldCheck',
    link: '/services/fbr-pra-e-invoicing',
    tag: 'Government Certified',
    features: [
      'Direct FBR IRIS & PRA API Integration',
      'Real-time FBR Invoice QR Code Generation',
      'Automatic Sales Tax & Further Tax Calculation',
      'Zero Disruption to Existing Billing Flow'
    ]
  },
  {
    id: 'order-booking-app',
    title: 'Order Booking',
    shortDesc: 'Capture customer orders efficiently and keep order booking connected with business operations.',
    fullDesc: 'Empower your field sales team and distributors. Book orders on Android, view real-time inventory, collect customer payments, and track live salesman GPS routes in real-time.',
    icon: 'Smartphone',
    link: '/services/order-booking-app',
    tag: 'Field Mobility',
    features: [
      'Offline Order Booking with Cloud Sync',
      'Real-time Customer Ledger & Outstanding Dues',
      'Live GPS Salesman Route Tracking & Visits',
      'Instant Payment Recovery Receipts via Mobile'
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'retail',
    title: 'Retail',
    subtitle: 'Run Your Store Like a Pro',
    description: 'Eliminate billing counter queues, manage thousands of SKUs effortlessly, and track stock across single or multi-branch retail outlets.',
    icon: 'ShoppingBag',
    painPoints: ['Slow billing counters', 'Inventory shrinkage', 'Mismatched barcode labels'],
    solutions: ['Instant POS barcode scanner', 'Automated stock deductions', 'Daily cash drawer balancing']
  },
  {
    id: 'wholesale-distribution',
    title: 'Wholesale & Distribution',
    subtitle: 'Distribute Smarter, Grow Faster',
    description: 'Coordinate field sales booking, warehouse dispatch, credit limits, and delivery challans across extensive wholesale networks.',
    icon: 'Truck',
    painPoints: ['Field sales order delays', 'Over-extended customer credit', 'Delayed payment recovery'],
    solutions: ['Mobile order booking app', 'Automated credit limit stops', 'Real-time salesman GPS tracking']
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    subtitle: 'From Raw Material to Finished Goods',
    description: 'Master your Bill of Materials, production stages, machine batch work orders, and accurate per-unit landed production costs.',
    icon: 'Cpu',
    painPoints: ['Uncalculated scrap wastage', 'Inaccurate finished goods costs', 'Production bottlenecks'],
    solutions: ['Multi-level BOM recipes', 'Real-time stage-wise work orders', 'Automated overhead absorption']
  },
  {
    id: 'healthcare-pharmacy',
    title: 'Healthcare & Pharmacy',
    subtitle: 'Patient Care Backed by Smart Systems',
    description: 'Strict batch and expiry tracking, prescription management, formula compositions, and distributor purchase margins.',
    icon: 'HeartPulse',
    painPoints: ['Expired medicine losses', 'Complex batch recall', 'Strict drug regulatory compliance'],
    solutions: ['Expiry alert notifications (30/60/90 days)', 'Batch-wise FIFO inventory', 'FBR digital invoicing']
  },
  {
    id: 'restaurant-food',
    title: 'Restaurant & Food',
    subtitle: 'From Kitchen to Customer, Seamlessly',
    description: 'Kitchen display systems (KDS), table management, recipe costing, raw ingredient depletion, and express takeaway billing.',
    icon: 'Utensils',
    painPoints: ['Food waste & ingredient theft', 'Slow table turnover', 'Kitchen order communication errors'],
    solutions: ['Automated recipe stock deduction', 'Kitchen Order Ticket (KOT) printing', 'Dine-in / takeaway / delivery splits']
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    subtitle: 'Manage Properties, Projects & Payments',
    description: 'Plot and unit bookings, installment schedules, investor statements, development expense tracking, and commission calculations.',
    icon: 'Building2',
    painPoints: ['Installment payment tracking chaos', 'Overlapping plot bookings', 'Unmonitored site construction costs'],
    solutions: ['Automated customer installment schedule', 'Unit availability visualizer', 'Project cost center ledgers']
  },
  {
    id: 'textile',
    title: 'Textile',
    subtitle: 'Weave Efficiency Into Every Process',
    description: 'Manage yarn, grey fabric, dyeing, printing, stitching, roll-wise tracking, and shrinkage calculations seamlessly.',
    icon: 'Layers',
    painPoints: ['Fabric roll wastage', 'Multi-stage processing loss', 'Dyeing & processing reconciliation'],
    solutions: ['Lot & roll barcode tracking', 'Dyeing formula cost controls', 'Vendor job-work processing management']
  },
  {
    id: 'construction',
    title: 'Construction',
    subtitle: 'Build on a Solid Foundation of Data',
    description: 'Project procurement, site material requisitions, contractor bills, sub-contractor ledgers, and heavy machinery utilization.',
    icon: 'Hammer',
    painPoints: ['Uncontrolled site material theft', 'Budget overruns on contracts', 'Delayed client interim billing'],
    solutions: ['Site-wise material requisitions', 'BOQ variance tracking', 'Contractor billing and retention money ledger']
  },
  {
    id: 'supermarket',
    title: 'Supermarket',
    subtitle: 'Keep Every Aisle Running Smoothly',
    description: 'Handle thousands of items, weigh-scale barcode integrations, promotional bundles, vendor returns, and rapid-fire checkout.',
    icon: 'ShoppingCart',
    painPoints: ['Peak-hour checkout congestion', 'Fast-moving FMCG stockouts', 'Supplier rebate calculation complexity'],
    solutions: ['High-throughput POS interface', 'Electronic scale barcode reader', 'Supplier purchase scheme tracking']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    badge: '35% OFF',
    description: 'Essential ERP tools for sole traders & small businesses',
    originalPriceYearly: 31000,
    discountedPriceYearly: 19999,
    originalPrice5Year: 155000,
    discountedPrice5Year: 89999,
    popular: false,
    features: [
      'Accounts & Finance',
      'Sales & Invoicing',
      'Purchases & GRN',
      'Inventory Management',
      'Point of Sale (POS)',
      'Multi-Unit Support',
      'Multi-Location Setup',
      'Executive Dashboards',
      'User-Rights & Roles',
      'Comprehensive Reports',
      'Document Attachments',
      'Standard Support',
      'Automated Backup Download'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    badge: '31% OFF',
    description: 'Complete ERP suite for growing business needs',
    originalPriceYearly: 36000,
    discountedPriceYearly: 24999,
    originalPrice5Year: 180000,
    discountedPrice5Year: 109999,
    popular: true,
    features: [
      'All Basic Features Included',
      'Manufacturing & BOM',
      'Project Management',
      'Landed Costs & Duties',
      'HR & Payroll Suite',
      'Biometric Attendance Integration',
      'Pharmaceutical Module',
      'Batch & Expiry Management',
      'Priority Support',
      'Custom Print Templates'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    badge: '27% OFF',
    description: 'Advanced ERP for high-performance business operations',
    originalPriceYearly: 41000,
    discountedPriceYearly: 29999,
    originalPrice5Year: 205000,
    discountedPrice5Year: 129999,
    popular: false,
    features: [
      'All Standard Features Included',
      'Advanced Multi-Company Grouping',
      'FBR / PRA Integration Support',
      'Unlimited Historical Data',
      'Custom Workflow Approvals',
      'Dedicated Account Manager',
      '24/7 VIP Phone & WhatsApp Support',
      'Quarterly Data Health Audit'
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Bilal Ijaz',
    role: 'Managing Director',
    time: '1 Day ago',
    rating: 5,
    initial: 'B',
    badge: 'Verified Customer',
    text: 'Transitioning to the Dreamonx ERP system has been a game-changer for our daily operations. The interface is highly intuitive, seamlessly integrating accounts, inventory, and sales. We have experienced zero system lagging, and the localized FBR integration and POS features make it incredibly practical for businesses in Pakistan. The support team is also quick to respond and ensures our team is well-trained. Thanks Dreamonx team, one of the best services I have received.'
  },
  {
    id: '2',
    name: 'Wilson Fisk',
    role: 'Operations Head',
    time: '2 Weeks ago',
    rating: 5,
    initial: 'W',
    badge: 'Verified Customer',
    text: 'We had an excellent experience working with this ERP system provider. Their solution has streamlined our business operations by integrating inventory, accounting, sales, and customer management into one easy-to-use platform. One of the standout features is the seamless digital invoice integration, which has significantly improved our billing process. Creating, sending, and tracking invoices is now faster, more accurate, and fully compliant with our business requirements. Highly recommend!'
  },
  {
    id: '3',
    name: 'Mudassar Naseer',
    role: 'Supply Chain Director',
    time: '1 Week ago',
    rating: 5,
    initial: 'M',
    badge: 'Verified Customer',
    text: "We are using services of Dreamonx ERP for FBR's digital Invoicing Integration system from last few months. This company is found highly professional in its services. Our problems during the services are solved within minutes and we are fully satisfied. We recommend others to rely on Dreamonx ERP without any doubt and grow business with their support."
  },
  {
    id: '4',
    name: 'Shams Ullah',
    role: 'Retail Business Owner',
    time: '1 Week ago',
    rating: 5,
    initial: 'S',
    badge: 'Verified Customer',
    text: "I've been using Dreamonx ERP POS software for almost one year, and my experience has been very positive. The user interface is clean, modern, and easy to understand, making daily work smooth even for new users. The settings are well organized and simple to configure according to business needs. The software runs reliably for day-to-day operations and performance has been good."
  },
  {
    id: '5',
    name: 'Flagship Store Multan',
    role: 'Retail Partner',
    time: '1 Day ago',
    rating: 5,
    initial: 'F',
    badge: 'Verified Customer',
    text: 'It is wonderful working with this team. Really appreciated all the staff and services are very good and cooperative. The retail checkout speed is fast and the offline sync works reliably during internet cuts.'
  },
  {
    id: '6',
    name: 'Asif Link builder',
    role: 'E-commerce & Distribution',
    time: '1 Month ago',
    rating: 5,
    initial: 'A',
    badge: 'Verified Customer',
    text: 'My experience with team of Dreamonx ERP is very good. Support team is always available and if I need any new feature it gets added within a working week. Outstanding customization flexibility.'
  },
  {
    id: '7',
    name: 'Ahsan Baig',
    role: 'Finance Manager',
    time: '1 Week ago',
    rating: 5,
    initial: 'A',
    badge: 'Verified Customer',
    text: 'We are using Dreamonx ERP system for digital invoices. It is very easy to use and support team very talented & hard working and we are fully satisfied with them. Highly recommended.'
  },
  {
    id: '8',
    name: 'Mian Farhan Manzoor',
    role: 'Corporate Enterprise User',
    time: '1 Week ago',
    rating: 5,
    initial: 'M',
    badge: 'Verified Customer',
    text: 'I purchased recently. VERY corporate.. Very professional. Add more features on my demand promptly. Excellent value.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'What Actually Needs to Be Connected in a Wholesale Distribution Business?',
    slug: 'what-actually-needs-to-be-connected-in-a-wholesale-distribution-business',
    author: 'Dreamonx Official',
    date: '2 weeks ago',
    readTime: '5 min read',
    excerpt: 'A wholesale distribution business does not run through one isolated process. A customer places an order. Stock has to be available. If it is not, purchasing must kick in immediately.',
    content: `A wholesale distribution business does not run through one process. A customer places an order. Stock has to be available. If it is not, purchasing may need to place an order to vendors immediately. Once goods arrive, the warehouse must verify counts against the GRN, update available balances, and notify the delivery team.

Without an integrated ERP like Dreamonx ERP, this lifecycle relies on scattered phone calls, WhatsApp messages, paper delivery receipts, and disconnected spreadsheets. Dreamonx ERP unifies wholesale order booking, customer credit limits, inventory synchronization, and accounts receivable in one real-time dashboard.`,
    tags: ['wholesale distribution business', 'wholesale order management', 'wholesale sales management', 'supplier management', 'inventory and sales management', 'stock and order synchronization'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80'
  },
  {
    id: '2',
    title: 'How FBR Digital Invoicing Software Simplifies Business Compliance and IRIS Integration',
    slug: 'how-fbr-digital-invoicing-software-simplifies-business-compliance',
    author: 'Dreamonx Official',
    date: '4 weeks ago',
    readTime: '6 min read',
    excerpt: 'FBR Digital Invoicing is changing how businesses create sales invoices. Creating a sales invoice is no longer just an internal accounting task—it requires direct regulatory compliance.',
    content: `FBR Digital Invoicing is changing how businesses create sales invoices in Pakistan. Creating a sales invoice is no longer just an accounting task for businesses; it now carries mandatory electronic transmission to the Federal Board of Revenue (FBR) IRIS system.

Dreamonx ERP is officially integrated with the Digital Invoicing System (DIS), producing verifiable QR codes directly on sales invoices. The moment your cashier or sales team finalizes an order, the invoice is cryptographically signed and acknowledged by FBR servers, ensuring full legal compliance without slowing down the counter checkout speed.`,
    tags: ['FBR Digital Invoicing Software', 'FBR Digital Invoicing', 'FBR e-Invoicing', 'IRIS Digital Invoicing', 'Digital Invoice Software Pakistan', 'ERP FBR Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80'
  },
  {
    id: '3',
    title: 'How ERP Software Simplifies Sales Returns, Inventory Updates, and Customer Refunds',
    slug: 'how-erp-software-simplifies-sales-returns-inventory-updates-and-customer-refunds',
    author: 'Dreamonx Official',
    date: '4 weeks ago',
    readTime: '4 min read',
    excerpt: 'Completing a sale is not always the end of a business transaction. Customers may return products because of damaged goods, incorrect deliveries, or quantity adjustments.',
    content: `Completing a sale is not always the end of a business transaction. Customers may return products because of damaged goods, incorrect deliveries, or expired batches. Handling returns manually usually introduces double-entry errors in customer ledgers and incorrect warehouse stock levels.

Dreamonx ERP links sales returns directly to original invoice records. When an item is returned, inventory is automatically credited to the correct location or quarantine zone, and a credit note is generated to adjust customer outstanding balances instantly.`,
    tags: ['Sales Return Management Software', 'ERP Sales Return', 'Customer Refund Management', 'Inventory Return Management', 'Sales Return Tracking'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&q=80'
  },
  {
    id: '4',
    title: 'Why Poor Customer Payment Tracking Creates Cash Flow Problems',
    slug: 'why-poor-customer-payment-tracking-creates-cash-flow-problems',
    author: 'Dreamonx Official',
    date: '5 weeks ago',
    readTime: '5 min read',
    excerpt: 'Selling products or services is only one part of the sales cycle. A business only earns revenue when customer payments are received, recorded correctly, and reconciled.',
    content: `Selling products or services is only one part of the sales cycle. A business only earns revenue when customer payments are received, recorded correctly, and banked. When credit sales lack systematic aging reports, businesses find themselves cash-strapped despite recording healthy top-line revenue numbers.

Dreamonx ERP provides automated customer aging analysis (0-30 days, 31-60 days, 60+ days) and notifies collections officers when credit thresholds are breached. Mobile field collectors can issue digital receipts on the spot with the Dreamonx Order Booking app.`,
    tags: ['Customer Payment Management Software', 'Payment Reconciliation Software', 'Cash Collection Software', 'Customer Payment Tracking', 'accounts receivable management software'],
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80'
  },
  {
    id: '5',
    title: 'Why Manual Customer Invoicing Creates Billing Delays and Payment Problems',
    slug: 'why-manual-customer-invoicing-creates-billing-delays-and-payment-problems',
    author: 'Dreamonx Official',
    date: '5 weeks ago',
    readTime: '4 min read',
    excerpt: 'Creating a few customer invoices every day is usually simple. But as a business grows, invoicing becomes much more complicated with discrepancies and disputes.',
    content: `Creating a few customer invoices every day is usually simple. But as a business grows, invoicing becomes much more complicated. Pricing tiers differ, volume discounts apply, and manual calculation errors creep into tax rates.

With Dreamonx ERP, invoices are generated automatically from confirmed sales orders with pre-set price lists and customer-specific discount policies. Customers receive professional PDF copies with itemized breakdowns, boosting invoice credibility and speeding up payment settlements.`,
    tags: ['Customer Invoicing Software', 'Sales Invoice Software', 'Invoice Management Software', 'Billing Software', 'sales invoice workflow in ERP'],
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&q=80'
  },
  {
    id: '6',
    title: 'Why Customer Orders Become Difficult to Manage as Businesses Grow',
    slug: 'why-customer-orders-become-difficult-to-manage-as-businesses-grow',
    author: 'Dreamonx Official',
    date: '5 weeks ago',
    readTime: '5 min read',
    excerpt: 'Managing customer orders becomes increasingly challenging as businesses expand. What starts as a simple notebook record turns into unfulfilled promises without an ERP.',
    content: `Managing customer orders becomes increasingly challenging as businesses expand. Orders arrive via phone, email, WhatsApp, and field salesmen. Without centralized tracking, duplicate orders get processed while urgent orders slip through the cracks.

Dreamonx ERP provides centralized order lifecycle tracking from draft to approved, packed, dispatched, and delivered. Sales managers can view order status at a glance and prevent stock-outs by reserving warehouse items in real-time.`,
    tags: ['Order Management Software', 'Customer Order Management', 'Order Processing Software', 'Sales Workflow Management', 'Order Tracking Software'],
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80'
  }
];

export const FAQS = [
  {
    q: 'What is Dreamonx?',
    a: 'Dreamonx is a cloud-based and offline-ready ERP (Enterprise Resource Planning) software designed to help businesses streamline their operations. It integrates various business functions like finance, HR, sales, inventory, and more into a single, easy-to-use platform, offering real-time insights and increased efficiency.'
  },
  {
    q: 'How does Dreamonx work?',
    a: 'Dreamonx operates seamlessly both in the cloud and offline. In the cloud mode, you can access it from anywhere using any web browser. In offline mode (Free Offline Dreamonx POS or Offline Lifetime License), you run it locally on your PC without needing an active internet connection, with optional background cloud synchronization whenever you reconnect.'
  },
  {
    q: 'Is Dreamonx suitable for my business?',
    a: 'Yes, Dreamonx is designed for businesses of all sizes and across various industries, including Retail, Trading & Wholesale Distribution, Manufacturing, Healthcare & Pharmacy, Restaurant & Food, Real Estate, Textile, Construction, and Supermarkets. Our modules can be tailored to your specific workflow.'
  },
  {
    q: 'How do I get started with Dreamonx?',
    a: 'You can get started immediately by clicking "Try for Free" for our 6-day free cloud trial, or download the Free Offline Dreamonx POS directly. You can also contact our sales team in Lahore or Faisalabad for an on-site or online personalized demo.'
  },
  {
    q: 'What are the pricing plans for Dreamonx?',
    a: 'Dreamonx offers transparent and affordable plans: Lifetime Offline License for PKR 65,000 (unlimited users, no monthly fee), and Cloud Plans starting from Rs 19,999/user/year (Basic), Rs 24,999/user/year (Standard - Most Popular), and Rs 29,999/user/year (Premium), with generous multi-year discounts.'
  },
  {
    q: 'Can I customize Dreamonx to fit my business?',
    a: 'Yes! Dreamonx is highly customizable. You can tailor the system to suit your business processes, including custom reports, invoice print templates, user roles & permissions, and specialized industry features.'
  },
  {
    q: 'Is there a free trial available?',
    a: 'Yes, we offer a 6-day free trial of Dreamonx cloud to help you evaluate the platform before committing to a paid subscription. You also have access to the Free Offline Dreamonx POS for desktop without any trial expiration!'
  },
  {
    q: 'How secure is my data on Dreamonx?',
    a: 'Data security is a top priority. Dreamonx uses industry-standard encryption protocols both in transit and at rest. Regular automated database backups keep your financial records secure, and user-based security ensures staff only access modules relevant to their role.'
  },
  {
    q: 'Will Dreamonx work on mobile devices?',
    a: 'Yes, Dreamonx has a fully responsive web interface that works on smartphones and tablets. In addition, we offer the dedicated Dreamonx Order Booking Android app for field salesmen and delivery teams with offline order entry and live GPS tracking.'
  },
  {
    q: 'How is customer support provided?',
    a: 'We offer 24/7 customer support via WhatsApp (+92 329 1040470 / +92 323 6683663), phone, and email. Our dedicated support team in Lahore and Faisalabad provides remote assistance, video walkthroughs, and prompt resolutions.'
  }
];

export const VIDEOS: VideoTutorial[] = [
  {
    id: 'v1',
    title: 'Dreamonx ERP Complete System Walkthrough & Overview',
    duration: '08:45',
    description: 'Learn how to navigate the Dreamonx ERP dashboard, configure initial company settings, and connect finance with sales in under 10 minutes.',
    category: 'Getting Started',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    youtubeId: 'BGIqQBUEm_k'
  },
  {
    id: 'v2',
    title: 'How to Setup Free Offline Dreamonx POS on Windows',
    duration: '05:20',
    description: 'A step-by-step guide to downloading, installing, and configuring your barcode scanner and thermal receipt printer on the Offline POS.',
    category: 'POS & Retail',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&q=80',
    youtubeId: 'BGIqQBUEm_k'
  },
  {
    id: 'v3',
    title: 'FBR & PRA Digital E-Invoicing Real-time Integration',
    duration: '06:15',
    description: 'See how Dreamonx ERP connects directly to the FBR IRIS and PRA Digital Invoicing System to generate compliant QR code invoices instantly.',
    category: 'E-Invoicing Compliance',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    youtubeId: 'BGIqQBUEm_k'
  },
  {
    id: 'v4',
    title: 'Dreamonx Order Booking Mobile App for Field Sales',
    duration: '07:30',
    description: 'Demonstrating mobile order booking, offline customer ledger viewing, payment collection, and admin live GPS location tracking.',
    category: 'Mobile Apps',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    youtubeId: 'BGIqQBUEm_k'
  }
];

export const OFFICE_LOCATIONS = [
  {
    city: 'Lahore, Pakistan',
    phone: '+92 323 6683663',
    whatsapp: 'https://wa.me/923236683663?text=Hi%20Dreamonx%20Lahore',
    address: 'Office no 16, 2nd Floor, Lahore Center, Main Boulevard, Gulberg 3, Lahore, Pakistan',
    email: 'support@dreamonx.com'
  },
  {
    city: 'Faisalabad, Pakistan',
    phone: '+92 329 1040470',
    whatsapp: 'https://wa.me/923291040470?text=Hi%20Dreamonx%20Faisalabad',
    address: 'Office # 17 Second Floor, Kohinoor 1, Faisalabad, Pakistan',
    email: 'support@dreamonx.com'
  },
  {
    city: 'Manchester, United Kingdom',
    phone: '+44 73 6628 8466',
    whatsapp: 'https://wa.me/447366288466?text=Hi%20Dreamonx%20UK',
    address: '61 Mosley Street Manchester, M2 3HZ, United Kingdom',
    email: 'support@dreamonx.com'
  }
];
