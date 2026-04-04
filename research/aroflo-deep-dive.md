# AroFlo Deep Dive Research
## For Coastal Ways Plumbing (Beau - Solo Plumber)
**Researched: 2026-04-02 | Enhanced: 2026-04-02 (full API data model, capability matrix, Make.com modules, Xero sync detail, supplier tiers, AI agent feasibility)**

---

## CRITICAL FINDING UP FRONT

**AroFlo's full platform requires a minimum of 3 users.** Beau is a solo plumber. He has two options:

1. **AroFloGo** (the lite product) - minimum 1 user, $39/month, designed for sole traders
2. **Full AroFlo** - minimum 3 users at $73/user/month = **$219/month minimum** (even for 1 actual person), plus **$2,900 one-off onboarding fee**

This is the single most important decision point. AroFloGo is cheaper but missing key features. Full AroFlo is powerful but expensive for a solo operator.

---

## 1. PRODUCT TIERS & PRICING

### AroFloGo (Sole Trader Product)
| Detail | Value |
|--------|-------|
| Price | **$39/month** per user (min 1 user) |
| Setup cost | **$0** (free) |
| Free trial | **14 days**, no credit card required |
| Target | Sole traders, simple service & installation workflows |

**AroFloGo includes:**
- Quoting
- Scheduling
- Timesheets
- Materials tracking
- Invoicing & payments
- GPS tracking
- Photo/document uploads
- Mobile app access
- Xero/MYOB/QuickBooks integration (no setup cost)

**AroFloGo does NOT include:**
- Client markups and price levels
- Asset management
- Compliance/safety forms (SWMS, JSA)
- Recurring/maintenance job automation
- Project management & Gantt charts
- Advanced inventory management
- Custom forms
- Likely: API access (unconfirmed — needs verification with AroFlo)

**Upgrade path:** All data carries over when upgrading from Go to full AroFlo.

### Full AroFlo
| Plan | Min Users | Price/User/Month | Monthly Min | Setup |
|------|-----------|-------------------|-------------|-------|
| Starter | 5 | ~$73 | $365 | $2,900 |
| Medium | 10 | ~$68 | $680 | $2,900 |
| Large | 30 | ~$62 | $1,860 | $2,900 |
| Enterprise | 50+ | Custom | Custom | Custom |

**Additional user types (for contractors/subcontractors):**
- Contractor user: $19/month (sees only assigned jobs)
- Passive user: $15/month (no system access, hours logged by others)
- Timesheet user: $24/month (min 5, views assigned jobs + logs time)

**Add-ons:**
- GPS tracking: from $15/device/month + hardware
- AI Bill Scanner: $35/month
- Additional training: $89/hour
- Consulting: $199/hour

**Promotions found:** 25% off implementation (saves ~$725), 1 month free on annual plan.

---

## 2. COMPLETE FEATURE SET

### Job Management
- Manual job creation (office or field)
- Automated work order email imports (email → job card with auto-extraction of client details, priority, due dates, description)
- Job linking (connect related jobs)
- Recurring/periodic jobs with predefined intervals (auto-generate)
- Job status tracking (real-time visibility)
- Job costing (labour + materials + inventory + expenses per job)
- Custom fields on tasks (text, numeric, date, checkbox, radio, select, multiselect, text area, barcode, documents/photos, canvas, web link)
- Sub-statuses (custom workflow states with colours)
- Job notes with email/SMS capability
- GPS coordinates on jobs

### Quoting & Estimating
- Online quoting with e-signature
- Quote markups at three levels: individual line item, material/labour totals, overall quote total
- Default markup percentages per business unit, client, or inventory item
- Detailed quotes with takeoff sheets (stages/phases)
- Groundplan integration (on-screen measurement for material accuracy)
- Online quote acceptance with client e-signature
- Automatic job creation when client accepts quote
- Quote tracking (sent, viewed, accepted, declined, expired)
- Quote expiry dates
- Optional line items and option groups
- Quote-to-project conversion (takeoff sheets become project stages)

### Invoicing & Payments
- Auto-generated invoices from job data (30-second generation)
- Stripe integration for on-site payment
- "Pay Now" links on PDF invoices
- Online invoice viewing
- Deposit invoicing (automatic)
- Part invoicing
- Recurring invoice generation at custom frequency
- Credit notes
- Payment tracking and reconciliation
- Automatic payment application when paid
- Payments flow directly to Xero/MYOB/QuickBooks
- BPAY barcode support
- Surcharge handling

### CRM / Customer Management
- Client database with full contact details
- Client locations (multiple per client)
- Client custom fields
- Client organisations (linking contacts to businesses)
- Transaction terms per client
- Custom priority settings per client
- Client markups (default markup per client) — **Full AroFlo only**
- Client portal / login
- Job history per client
- Asset history per client
- Automatic email-to-job-card from client work orders

### Scheduling & Dispatch
- Drag-and-drop calendar
- Multiple calendar views (day, week, month)
- Real-time mobile notifications to technicians
- Schedule groups (multiple resources in one block)
- Qualification-based scheduling (only assign qualified techs)
- Asset/equipment scheduling
- Google Calendar sync (**one-way only** — AroFlo → Google Calendar, not back)
- Schedule reminders via SMS

### Timesheets & Labour
- Digital timesheets from field
- Automatic timesheet logging from GPS
- Overtime auto-conversion (e.g., time-and-a-half, double-time)
- Billable vs non-billable hour tracking
- Gap detection (auto-apply overhead to unbilled gaps)
- Payroll integration with Xero and MYOB
- Timesheet verification and locking
- End-of-day approval workflow

### Inventory & Materials
- Full inventory management with stock levels
- Multiple stock locations (warehouses, vans/trucks)
- Low stock alerts with automatic reorder suggestions
- Barcode scanning (mobile)
- Item categories with hierarchy
- Item pricing (cost, sell for invoices, sell for tasks, sell for quotes)
- Margin settings per item
- Pre-loaded test items for practice
- Bulk inventory import on setup

### Purchase Orders & Suppliers
- Create POs from phone/computer
- Direct ordering with 600+ suppliers
- **Reece integration** (critical for plumber — direct PO to Reece, Actrol, Metalflex)
- Live supplier pricing from negotiated rates
- Supplier invoice scanning (AI Bill Scanner add-on)
- Automatic bill creation from scanned invoices
- Supplier catalogue browsing within AroFlo

### Compliance & Safety Forms
- **Full AroFlo only** (NOT in AroFloGo)
- OHS/WHS checklists
- Custom compliance form builder (table-based cell editor)
- Pre-built form library
- Risk templates
- SWMS (Safe Work Method Statement) support
- JSA (Job Safety Analysis) support
- Mandatory pre-start forms (block work until forms completed)
- Checklist event messages (alerts when items pass/fail)

### Asset Management
- **Full AroFlo only**
- Asset tracking with custom fields
- Asset history (all previous jobs, invoices, repairs)
- GPS tracking on assets (AroPoint hardware)
- Barcode/serial number tracking
- Odometer readings
- Manufacturer and model tracking
- Client asset management
- Asset scheduling

### Project Management
- **Full AroFlo only**
- Multi-stage projects
- Gantt charts with drag-and-drop
- Dependencies between tasks
- Milestones (visual diamonds on timeline)
- Project-level custom fields
- Stage-level tracking
- Calendar ↔ Gantt sync

### Document Management
- Upload any file type
- Photo/video capture from mobile
- File storage on jobs, clients, assets
- No limit on number of files (fair use policy)
- 250MB max per file
- Document directory
- Email attachment import to task documents

### Reporting
- Custom report builder
- Job profitability reports (P&L per job)
- Divisional and overall gross profit
- Team member efficiency
- Callback tracking
- Work in progress values
- Outstanding invoice tracking
- Client-accessible reports

### Mobile App (AroFlo Field)
- iOS and Android
- **Offline mode** — create tasks, record labour/materials/expenses without internet
- Signature capture (online and offline)
- Photo capture and upload
- Barcode scanning
- GPS location capture
- Real-time sync when back online
- Quote creation in field
- Invoice creation in field
- Timesheet entry
- Form completion

### SMS & Communications
- SMS gateway integration (ClickSend, MessageMedia, SMS Central, SMS Global, SMS Broadcast)
- Automatic SMS triggers: job completed, quote approved, schedule reminders, status changes, note added
- Travel-to-site notifications (customer knows tradesperson is coming)
- Staff arrival alerts
- Custom message templates
- Podium integration (review requests)

### AroConnect (Contractor Network)
- Send/receive work orders between AroFlo users
- Contractor management
- Subcontractor coordination

---

## 3. API DOCUMENTATION

### Authentication
- **Method:** HMAC (Hash-based Message Authentication Code)
- **Required credentials:**
  - `uEncoded` (encoded username)
  - `pEncoded` (encoded password)
  - `orgEncoded` (encoded organisation)
  - `API Secret Key` (generated in Site Administration)
- **Setup location:** Site Administration > Settings > General > AroFlo API
- **Critical:** Must click Save after generating Secret Key or it won't work. Key is shown only once — cannot be retrieved later.
- **Access:** Must request API access from AroFlo support if not already enabled

### Technical Specs
- **Type:** REST API
- **Base URL:** `https://api.aroflo.com/` (from Pipedream connector)
- **Response format:** XML (default) or JSON
- **Rate limit:** **2,000 API calls per day** (this is LOW)
- **Documentation:** https://apidocs.aroflo.com/ (Postman collection available)
- **Developer Hub:** https://docs.api.aroflo.com/

### Available API Endpoints (Full List)
Based on SyncHub's data model and AroFlo documentation, the following entities are accessible via API:

**Core entities:**
- Task (jobs)
- Client
- Contact
- Quote
- Invoice
- Bill
- Payment
- Purchase Order
- Project
- Stage
- Schedule
- Asset
- Supplier
- Organisation
- Business Unit
- User
- Location
- Document
- Item (inventory)
- Inventory Category

**Detail/child entities:**
- Task Labour
- Task Material
- Task Expense
- Task Asset
- Task Note
- Task Custom Field
- Task Sales Person
- Task Assigned History
- Task Type
- Invoice Line
- Bill Line Item
- Bill Note
- Bill Task
- Quote Line
- Purchase Order Line
- Purchase Order Task
- Purchase Order Project
- Client Custom Field
- Client Organisation
- Asset Custom Field
- Location Custom Field
- Project Custom Field
- Supplier Organisation
- Timesheet
- Tracking Centre
- Transaction Term
- User Position
- User Custom Field
- Work Type
- Substatus

### Request Format
```
URL:    https://api.aroflo.com/
Method: GET (read) or POST (write)
Headers:
  Accept: text/json          (or text/xml for XML)
  Authentication: HMAC {hmac_key}
Query params (GET example):
  zone:  tasks               (entity type — see zones below)
  page:  1                   (pagination)
  where: and|status|=|open   (filter — pipe-delimited)
```

**Zone parameter** = the entity you are querying. One zone per call. Known zones: `tasks`, `clients`, `contacts`, `quotes`, `invoices`, `bills`, `payments`, `purchaseorders`, `projects`, `stages`, `schedules`, `assets`, `suppliers`, `organisations`, `businessunits`, `users`, `locations`, `documents`, `items`, `inventorycategories`, `timesheets`, `substatuses`, `worktypes`.

**Write operations** use POST with an XML body (`PostXML` parameter) or JSON body. Zapier's "Custom Payload" action exposes this directly: you specify the zone + the XML/JSON payload.

### What Can Be Done Via API — Full Capability Matrix

#### Jobs/Tasks
| Operation | Answer | Evidence |
|-----------|--------|----------|
| CREATE a task/job | **YES** | Zapier "Create Task" action: business unit, client ID, task type, task name, due date, description required |
| UPDATE task status | **YES** | Zapier "Update Task Status": status + optional substatus by task ID |
| UPDATE task fields | **YES** | Zapier "Update Task Fields": customer order number, priority by task ID |
| ADD notes to a task | **YES** | Zapier "Add Task Note": note content, visibility (internal/external), sticky option |
| ADD photos/attachments | **LIKELY** | Document entity exists in API data model (Documentid, Url, Sizeinbytes, UploadedByUserID). 250MB max per file. No explicit Zapier action but Custom Payload can target document zone |
| READ all tasks | **YES** | Zapier trigger "List New or Updated Tasks" + "Find Task" search. API zone=tasks with where filter |
| FILTER tasks by status/date/client | **YES** | API `where` parameter supports pipe-delimited filters: `and|status|=|open`, `and|clientid|=|123`, `and|duedate|>=|2026-01-01` |
| Assign task to user | **YES** | TaskAssignedHistory and TaskSalesPerson entities in data model. Task has ContactID and can be updated |

#### Clients/Contacts
| Operation | Answer | Evidence |
|-----------|--------|----------|
| CREATE a client | **YES** | Zapier "Create Client": company name, given names, surname, country, address fields |
| UPDATE client details | **YES** | Zapier "Update Client": by client ID, all fields optional |
| SEARCH clients | **YES** | Zapier "Find Client": by company/reference name with optional JOIN parameters |
| Link task to client | **YES** | Task entity has ClientID field — set at creation or update |
| Find or create client | **YES** | Zapier "Find or Create Client": searches by company name, creates if not found |

#### Quotes
| Operation | Answer | Evidence |
|-----------|--------|----------|
| CREATE a quote | **YES (via Custom Payload)** | Quote entity + QuoteLine entity in API. Make.com "Search Quotes" and "Watch Quotes" confirm API access. Custom Payload action for writes |
| ADD line items to quote | **YES (via Custom Payload)** | QuoteLine entity: Description, Quantity, Cost, Sell, Tax fields. Use zone=quotes with line items in XML/JSON body |
| SEND quote to client | **UNCONFIRMED** | AroFlo has Online Quote Acceptance with emailed links, but no explicit API endpoint for triggering send found. May need to use event messages or manual send after API creation |
| READ quote status | **YES** | Quote entity has: Status, Acceptancestatus, Acceptancedate, Rejecteddate, Approveddate. Make.com "Watch Quotes" triggers on create/update |

#### Invoices
| Operation | Answer | Evidence |
|-----------|--------|----------|
| CREATE an invoice | **YES (via Custom Payload)** | Invoice entity in API with all required fields. Make.com "Watch Invoices" + "Search Invoices" + "Get an Invoice" confirm full access |
| ADD line items | **YES (via Custom Payload)** | InvoiceLine entity: Description, Quantity, Cost, Sell, Tax, ItemID fields |
| SEND invoice to client | **UNCONFIRMED** | AroFlo has "Pay Now" links and email sending in UI, but no explicit API trigger for email send found |
| Mark invoice as PAID | **YES (via Custom Payload)** | Payment entity exists: Paymentid, Totalamount, Datepaid, LinkedToInvoiceID, Paymentmethodname. Invoice has Status field |
| READ invoice status | **YES** | Zapier trigger "List New or Updated Invoices" + "Find Invoice". Invoice entity has Status, Totalinc, Totalex, Duedate |

#### Inventory/Stock
| Operation | Answer | Evidence |
|-----------|--------|----------|
| READ inventory levels | **YES** | Item and InventoryCategory entities in API. Item has Costex, Partnumber, CategoryID. Inventory has stock alert levels |
| UPDATE inventory quantities | **YES (via Custom Payload)** | Item entity writable via API. InventoryCategory has Bustockalertlevel, Chstockalertlevel, Userstockalertlevel |
| CREATE inventory items | **YES (via Custom Payload)** | Item entity with all fields. Also bulk upload (300 items via CSV in UI) |
| Set LOW STOCK alerts | **YES (in UI, readable via API)** | InventoryCategory has alert level fields per business unit, per user. Alerts trigger when stock drops below threshold |
| Create PURCHASE ORDERS | **YES** | PurchaseOrder entity: SupplierID, Status, Ordernumber, Totalex, Totalinc, DeliveryInstructions + PurchaseOrderLine for items |
| Materials/stock module | **YES** | Full inventory management: multi-location (warehouses, vans), barcode scanning, stock assemblies, SOR items, supplier pricing |

#### Purchase Orders
| Operation | Answer | Evidence |
|-----------|--------|----------|
| CREATE purchase orders | **YES** | PurchaseOrder entity in API + PurchaseOrderLine for line items |
| Link POs to tasks/jobs | **YES** | PurchaseOrderTask entity links PO to Task. TaskMaterial tracks materials on jobs with PO references (Purchaseorderisordered, Purchaseorderqtybilled, Purchaseorderqtyordered) |
| Link POs to suppliers | **YES** | PurchaseOrder has SupplierID foreign key. 600+ suppliers including Reece, Actrol, Metalflex |

#### Scheduling
| Operation | Answer | Evidence |
|-----------|--------|----------|
| READ schedule | **YES** | Zapier "Find Schedule": by ID, task ID, type, person assignment, or dates. Schedule entity has Startdatetime, Enddatetime, ScheduledToUserID |
| CREATE schedule entries | **YES (via Custom Payload)** | Schedule entity writable: TaskID, ScheduledToUserID, Startdatetime, Enddatetime, Note |
| UPDATE/move schedule entries | **YES (via Custom Payload)** | Schedule entity fields updateable. Scheduleid for targeting |

#### Custom Fields
| Operation | Answer | Evidence |
|-----------|--------|----------|
| Support custom fields | **YES** | Available on: Tasks, Clients, Locations, Suppliers, Contractors, Assets, Users, Contacts, Projects, Purchase/Work Orders |
| Field types available | **YES** | Text box, Numeric, Date, Checkbox, Radio, Select, Multiselect, Text area, Barcode, Documents/Photos, Canvas, Web Link |
| Read/write via API | **YES** | Dedicated entities: TaskCustomField, ClientCustomField, AssetCustomField, LocationCustomField, ProjectCustomField, UserCustomField — each with Fieldid, Name, Value, Type |

#### Webhooks / Event Messages
| Operation | Answer | Evidence |
|-----------|--------|----------|
| Webhook support | **YES** | Event Messages support Email, SMS, or Webhook delivery types |
| Task created event | **YES** | Confirmed: triggers on manual task creation (not periodic/template-generated tasks) |
| Task status changed | **YES** | Substatus changes trigger events |
| Checklist pass/fail | **YES** | Events fire when checklist items marked passed/failed/N/A |
| Quote status events | **YES** | Conditional logic for quote reminders: acceptance expiry, status = "Awaiting Decision" |
| Schedule reminders | **YES** | Calendar event reminders via email, SMS, desktop alert, or webhook |
| Invoice events | **LIKELY** | Invoice entity has Status field and Zapier has invoice triggers, but webhook-specific invoice events not explicitly confirmed |
| Webhook payload format | **UNCONFIRMED** | Webhook delivery confirmed, but exact payload structure not documented in public help docs. Must test in-app |
| Webhook history/debugging | **YES** | Can view history of successful/failed event messages in Site Admin |
| Configure webhook URL | **YES** | Set up in Site Administration > Settings > General > Event Messages |

### Webhooks / Event Messages
- **Supported:** YES
- **Message types:** Email, SMS, or Webhook
- **Configurable events include:**
  - Task created (manual creation only, not periodic/template)
  - Task status changed
  - Quote accepted/declined/awaiting decision
  - Invoice status changed
  - Checklist items passed/failed/N/A
  - Compliance form edited
  - Schedule reminders
- **Webhook history:** Can view successful/failed webhook deliveries
- **Setup:** Site Administration > Settings > General > Event Messages

### API Limitations
- **2,000 calls/day is very restrictive** — limits real-time sync, bulk operations, and frequent polling
- No coding support from AroFlo (Postman testing only)
- XML default (JSON available but not default)
- Historical data loading is slow due to rate limits
- Authentication header issues reported by community members
- API documentation is in a Postman collection (not easily browsable online — the developer hub is a JS SPA that doesn't render content for web crawlers)

### API Availability by Plan
- **Unconfirmed whether AroFloGo includes API access** — this is a critical question Beau must ask AroFlo directly
- Full AroFlo: API access available (must be requested/enabled)

---

## 4. INTEGRATIONS

### Accounting (Native)
| Package | Syncs |
|---------|-------|
| **Xero** | See detailed Xero section below |
| **MYOB** | AccountRight and Pro, timesheets, documents/photos on bills |
| **QuickBooks** | Supported (details less documented) |
| **Reckon** | Supported |

#### Xero Integration — Detailed Breakdown

**Sync method:** Manual trigger ("click of a button") — NOT automatic/real-time. Changes in AroFlo are sent to Xero the next time you run the integration link. This is critical: there is no background auto-sync.

**AroFlo --> Xero (push):**
- Client contacts
- Supplier contacts
- Invoices (completed tasks)
- Purchase orders (completed)
- Payments
- Credit notes
- Staff timesheets (productive + non-productive hours for payroll)
- Tracking centre data (labour, materials, freight, expense items map to Xero tracking categories)

**Xero --> AroFlo (pull):**
- GL account codes
- Tax codes
- Client payments (from bank feed — 7 days of records retrievable from any date)
- Supplier payments (from bank feed)
- Client contact details
- Supplier contact details

**Bi-directional:** Payments are two-way. Payments recorded in Xero via bank feed can be posted back against invoices in AroFlo for reconciliation.

**Xero plan requirements:** Not explicitly documented — works with Xero App Store integration (listed on apps.xero.com). Standard Xero plan should suffice.

**Can we trigger sync via API:** **NO** — sync is triggered manually in the AroFlo UI. No API endpoint to initiate an accounting sync.

**Setup:** AroFlo's team pulls across initial data (account codes, contacts) during onboarding. Tracking centres can be assigned per item type. Integration entity settings are configured in Site Administration.

### Suppliers (600+ total, key ones for plumbing)

**Tier 1 — Direct ordering + live pricing catalogue:**
- **Reece** — direct PO from AroFlo purchase order screen, live negotiated pricing via maX portal login, PO instantly dispatched to Reece system (no email/manual entry), auto invoice import (including kits)
- **Actrol** — part of Reece Group, same integration, auto invoice import
- **Metalflex** — part of Reece Group, same integration, auto invoice import
- **Rexel Group** — direct PO from AroFlo, catalogue browsing

**Tier 2 — Catalogue browsing + invoice import (9 catalogue suppliers total):**
- DW Supplier Catalogue
- AWM Supplier Catalogue
- TLE Supplier Catalogue
- Haymans Supplier Catalogue
- MM Electrical Catalogue

**Tier 3 — Invoice import only (AI Bill Scanner):**
- **Bunnings** — invoice import supported (portrait orientation required)
- **Bunnings NZ** — invoice import supported (portrait orientation)
- **Bunnings Trade** — invoice import supported (landscape orientation)
- Many more via AI Bill Scanner ($35/month add-on)

**Walsh:** No specific AroFlo integration found. Would need to be added as a custom supplier. Invoices could potentially be imported via AI Bill Scanner if Walsh provides standard format invoices.

**Bunnings Powerpass:** No direct catalogue integration with AroFlo. Bunnings invoice import is supported (Tier 3 above), but there is no live pricing or direct PO capability like Reece has. Powerpass purchases would be manual — buy at Bunnings, scan/import the invoice into AroFlo afterwards.

**Can we build custom supplier integration:** YES — any supplier can be added manually in AroFlo. POs can be created and emailed to any supplier. For automated catalogue/pricing integration, AroFlo would need to build that (or you'd need to use the API to push supplier data in).

### Payments
- **Stripe** (on-site payment, payment links, automatic reconciliation)

### SMS Providers
- ClickSend, MessageMedia, SMS Central, SMS Global, SMS Broadcast, Podium, LANA

### Calendar
- **Google Calendar** (one-way only: AroFlo → Google)

### GPS Hardware
- Digital Matter, ATrack

### Estimating
- Groundplan (on-screen takeoff/measurement)

### Industry Bodies
- Master Electricians Australia, NECA

### Via Zapier (7,000+ apps possible) — Version AroFloHmacCLIAPI@1.0.13
**Triggers (polling — returns ID lists, use Find as next step):**
1. List New or Updated Clients — does NOT count toward API limit
2. List New or Updated Tasks — does NOT count toward API limit
3. List New or Updated Invoices — does NOT count toward API limit
4. List Timesheets — with optional type/date filtering

**Actions (write):**
1. Create Task — requires: business unit, client ID, task type, task name, due date, description
2. Create Client — requires: company name, given names, surname, country
3. Create User — requires: business unit, names, username, password, permission group
4. Update Client — by client ID, all fields optional (address, contact, business details)
5. Update Task Fields — by task ID: customer order number, priority
6. Update Task Status — by task ID: status + optional substatus
7. Add Task Note — by task ID: note content, visibility (internal/external), sticky note option
8. Custom Payload — zone + raw XML body: **any API call** (this is the escape hatch for quotes, invoices, POs, etc.)

**Search actions (read):**
1. Find Client — by company/reference name, optional JOIN parameters
2. Find Task — by ID with optional JOIN fields for related data
3. Find Invoice — by ID with optional data joins
4. Find Asset — by asset ID, category, name, order code, customer ID, or serial number
5. Find Business Unit — by name
6. Find Schedule — by ID, task ID, type, person assignment, or dates
7. Find Timesheet Group — combined timesheet data including hours and daily breakdowns
8. Find or Create Client — searches by company name, creates with full fields if not found

**Key Zapier behaviours:**
- Triggers return ID lists only (lightweight) — chain with Find action for full data
- Trigger polling does NOT count toward the 2,000/day API limit
- Free Zapier plan polls every 15 minutes; paid plans poll every 1-2 minutes
- Custom Payload is the power tool — any zone + any XML body

### Via Make.com (formerly Integromat) — COMMUNITY connector
**Authentication:** API Key (same credentials: uEncoded, pEncoded, orgEncoded, Secret Key)
**Developer:** Maxmel Tech (community-maintained, NOT official Make/AroFlo support)

**Watch modules (triggers):**
1. Watch Tasks — triggers on task created or updated
2. Watch Invoices — triggers on invoice created or updated
3. Watch Quotes — triggers on quote created or updated
4. Watch Work Orders — triggers on work order created or updated

**Get modules (single record):**
1. Get a Task — by task ID, full detail
2. Get an Invoice — by invoice ID, full detail
3. Get a Work Order — by work order ID, full detail

**Search modules (filtered lists):**
1. Search Tasks — by criteria/filters
2. Search Invoices — by criteria/filters
3. Search Quotes — by criteria/filters
4. Search Work Orders — by criteria/filters

**Custom module:**
1. Make an API Call — custom authorized request to any endpoint (same escape hatch as Zapier Custom Payload)

**Make.com advantages over Zapier:**
- Quote and Work Order triggers/searches (Zapier lacks these)
- Visual scenario builder (more complex multi-step workflows)
- Community connector means it may lag behind API changes

### Via n8n (self-hosted)
- **No native AroFlo node** in n8n
- **Workaround:** Use n8n's HTTP Request node with HMAC authentication
- Can replicate everything Zapier/Make do via raw API calls
- Advantage: runs locally on OrbStack, no per-task pricing, unlimited executions
- Requires building HMAC auth header calculation in n8n (JavaScript code node)

### Via Pipedream
- API connector available
- Base URL: `https://api.aroflo.com/`
- HMAC authentication

### Via SyncHub (Reporting)
- Syncs full AroFlo data model to SQL database
- Connect to Power BI, Excel, Google Data Studio, Tableau
- Read-only (one-way from AroFlo)
- Azure Sydney data centre

---

## 5. PAIN POINTS & REAL USER FEEDBACK

### Consistent Complaints (from Capterra, G2, Software Advice, ITQlick)

**Setup & Learning Curve:**
- "Steep learning curve for beginners"
- "Overcomplicated — too many fields that cannot be hidden or turned off"
- One user: "hired a training company, invested $4,000+ on training, told needed to spend over $20k more just to get started"
- Custom template setup is difficult
- Report development is complex
- "Discovering product limitations after setup that were not initially disclosed"

**For Solo/Small Operators:**
- Minimum user requirements exclude very small businesses from full AroFlo
- AroFloGo is limited — no compliance forms, no asset management
- Overkill for simple service work
- Industry comparison sites recommend ServiceM8 or Tradify for solo tradies over AroFlo

**Mobile App Issues:**
- Photo upload failures in poor internet areas
- Not truly offline for all features
- "Poor mobile optimization for office users"
- Field interface complaints

**Technical Issues:**
- Calendar bugs — "deletes information with no backup"
- Timesheet entries "regularly lost or deleted due to program bugs"
- "Sporadic server reliability"
- Bugs after major updates
- "Frequent unannounced UI changes"
- No auto-save for descriptions
- Copy-paste formatting issues (comma loss)

**Reporting:**
- "Limited reporting" for some users
- No multi-project Gantt charts
- Job cost report configuration unintuitive
- Basic inventory management
- Single van location per item

**Invoicing & Financial:**
- No foreign currency support
- Tax calculation issues with MYOB integration
- GST invoicing handling inconsistency
- Credit notes cannot be imported for reconciliation
- Difficult to format professional invoices

**Support:**
- "Email help support is very slow"
- Some support staff "appear disengaged"
- "Development team resistant to feature requests"
- Support denies bugs, blames customer

**API:**
- 2,000 calls/day is very restrictive
- Loading historical data via API is problematic
- Authentication can be tricky to set up
- Documentation is in Postman (not easily browsable)

### Consistent Praise

- "Game changer" for scheduling and job management
- Strong Xero integration
- Reece supplier integration (critical for plumbing)
- Comprehensive — "only software that ticked all the boxes"
- Australian-built, understands AU trades businesses
- Good phone support (when you get through)
- AroFlo Academy training videos
- Enabled businesses to scale (6 → 21 staff)
- Real-time job costing
- Quote-to-invoice workflow

---

## 6. OPPORTUNITIES FOR CUSTOM TOOLING

Given AroFlo's capabilities and limitations, here's where custom tooling can add value for Beau:

### High-Value Automation Opportunities

1. **Simplified Job Intake (for Emma/Tim)**
   - Build a simple web form or Telegram bot that creates AroFlo tasks via API/Zapier
   - Auto-populates client lookup, job type, priority, description
   - Shields non-technical users from AroFlo's complex interface
   - Uses: Zapier "Create Task" action or direct API POST

2. **End-of-Day Summary Generator**
   - Poll AroFlo API for today's completed tasks, timesheets, invoices
   - Generate a clean summary: jobs done, hours logged, revenue, tomorrow's schedule
   - Deliver via Telegram/email
   - Challenge: 2,000 call/day limit means must be efficient with API calls

3. **Quote Follow-Up Automation**
   - Trigger: Zapier "List New or Updated Invoices" or webhook on quote status change
   - If quote not accepted within X days → send follow-up SMS/email
   - Track win/loss rates

4. **Customer Communication Automation**
   - "On my way" SMS (AroFlo has this natively, but custom could be richer)
   - Post-job review request (integrate with Google Reviews)
   - "Happy anniversary" follow-up for recurring maintenance upsell

5. **Financial Dashboard**
   - Use SyncHub or direct API to pull job data into a simple dashboard
   - Show: weekly revenue, outstanding quotes, unpaid invoices, profit margins
   - Simpler than AroFlo's built-in reporting

6. **Webhook-Driven Notifications**
   - AroFlo webhooks → custom endpoint → Telegram messages
   - Examples: "New job created", "Quote accepted by [client]", "Invoice paid"
   - Real-time business pulse without opening AroFlo

### API Rate Limit Workarounds
- Use webhooks (event-driven) instead of polling where possible
- Batch API calls efficiently (one call per entity type per sync)
- Cache data locally and only fetch changes
- SyncHub for heavy reporting (handles API calls for you)
- Zapier polling is every 15 minutes on free plan — factor this into design

### What's NOT Possible via API/Automation
- Cannot create compliance forms via API
- Cannot trigger periodic job generation via API
- Cannot manage user permissions via API
- Cannot customize AroFlo's UI
- No two-way Google Calendar sync (AroFlo limitation)
- Cannot trigger Xero sync via API (manual button press only)
- Cannot send quote/invoice emails via API (creation yes, sending unconfirmed)
- Cannot access the Reece supplier catalogue via API (catalogue browsing is UI-only)

### Can We Build an AI Agent? — Detailed Assessment

**Scenario: Emma types "New job for Mrs Smith at 15 Beach Rd Terrigal, blocked drain, Thursday 2pm"**
- **VERDICT: YES, fully buildable**
- Flow: Parse with AI (Claude) --> Find or Create Client (Zapier/API: search by "Smith", create if not found) --> Create Task (API: task name "Blocked drain", description, due date Thursday, client ID from step 1) --> Create Schedule Entry (API: Thursday 2pm, assigned to Beau)
- Complexity: Medium. Client matching is the tricky part (fuzzy search on name + address). Zapier's "Find or Create Client" simplifies this.
- Rate limit impact: ~3-5 API calls per job creation. At 2,000/day limit, this supports ~400-600 job creations per day (more than enough for solo plumber).

**Scenario: End-of-day summary pulling incomplete tasks**
- **VERDICT: YES, buildable with caveats**
- Flow: API call zone=tasks with where filter for status=open/in-progress + today's date --> API call zone=timesheets for today --> API call zone=invoices for today --> Compile summary --> Send via Telegram/email
- Complexity: Low-medium. Filtering by date requires correct where parameter syntax.
- Rate limit impact: ~4-8 calls per summary run. Negligible.
- Caveat: Timesheets may not capture everything if Beau doesn't log consistently.

**Scenario: Low stock alerts and auto-generated purchase orders**
- **VERDICT: PARTIALLY — alerts exist natively, auto-PO is custom**
- AroFlo already has low stock alerts (built-in). When stock drops below threshold, items appear in next stock order.
- To auto-generate POs: Poll inventory via API --> Identify items below threshold --> Create PO via Custom Payload (zone=purchaseorders with line items + supplier ID) --> Optionally notify Beau via Telegram for approval before dispatch.
- Complexity: Medium-high. Requires mapping inventory items to preferred suppliers, quantity logic.
- Rate limit impact: Depends on inventory size. ~50-100 items = ~5-10 API calls per check.

**Scenario: Conversational job intake via Telegram**
- **VERDICT: YES, this is the highest-value custom tool**
- Architecture: Telegram message --> SargeantSnips parses with Claude --> Extracts: client name, address, job type, urgency, preferred date/time --> API calls to AroFlo (find/create client, create task, create schedule) --> Confirm back to Emma/Tim via Telegram
- This bypasses AroFlo's complex UI entirely for intake.
- Can be extended: "What's Beau doing tomorrow?" --> API call to schedules --> formatted response.

**Scenario: Quote follow-up automation**
- **VERDICT: YES**
- Use webhook event on quote status change OR Zapier "Watch Quotes" (Make.com) --> If status = "Awaiting Decision" for >7 days --> Send follow-up email/SMS via AroFlo event message or external tool.

**Key constraint for all AI agent scenarios:** The 2,000 calls/day API limit. For a solo plumber doing 5-10 jobs/day, this is ample. But if you're polling frequently for status updates, you'll burn through calls. **Use webhooks for event-driven architecture, not polling.**

---

## 7. RECOMMENDATION FOR BEAU

### Start with AroFloGo ($39/month)
- Zero setup cost
- 14-day free trial
- Covers quoting, scheduling, invoicing, payments (Stripe), timesheets
- Xero integration included
- Reece supplier integration likely available (verify)
- Mobile app with offline mode

### Verify These Questions Before Committing
1. **Does AroFloGo include API access?** (Critical for automation)
2. **Does AroFloGo include the Reece supplier catalogue?** (Critical for plumber)
3. **Does AroFloGo include Zapier integration?** (Critical for automation)
4. **Does AroFloGo include webhook event messages?** (Critical for notifications)
5. **Can AroFloGo be upgraded mid-contract without data loss?** (Confirmed yes, but verify timeline)
6. **Are SMS integrations available on AroFloGo?** (For customer notifications)

### Upgrade Triggers (When to move to Full AroFlo)
- When Beau hires his first employee (needs scheduling/dispatch)
- When compliance forms become critical (SWMS for commercial work)
- When recurring maintenance contracts become a revenue stream
- When project management is needed (larger renovation jobs)

### Custom Tooling Priority
1. **Week 1:** Set up AroFloGo + Xero + Stripe
2. **Week 2:** Test API access, build Telegram notification bot (webhook-driven)
3. **Week 3:** Build simple job intake form for Emma (Zapier-powered)
4. **Week 4:** Build end-of-day summary automation
5. **Ongoing:** Financial dashboard, quote follow-up automation

---

## Sources

### Official AroFlo
- [AroFlo Main Site](https://aroflo.com/)
- [AroFlo Pricing](https://aroflo.com/pricing)
- [AroFloGo Product Page](https://aroflo.com/go/aroflogo)
- [AroFlo Features - Job Management](https://aroflo.com/features/job-management)
- [AroFlo Features - Quoting](https://aroflo.com/features/job-estimating)
- [AroFlo Features - Invoicing](https://aroflo.com/features/invoicing-billing-software)
- [AroFlo Features - Payments](https://aroflo.com/features/payments)
- [AroFlo Features - Scheduling](https://aroflo.com/features/scheduling)
- [AroFlo Features - Timesheets](https://aroflo.com/features/timesheets)
- [AroFlo Features - Inventory](https://aroflo.com/features/inventory-management)
- [AroFlo Features - Asset Management](https://aroflo.com/features/asset-management)
- [AroFlo Features - Compliance](https://aroflo.com/features/ohs-compliance)
- [AroFlo Features - Reporting](https://aroflo.com/features/business-reporting-software)
- [AroFlo Features - Document Storage](https://aroflo.com/features/document-storage)
- [AroFlo Features - SMS Gateway](https://aroflo.com/features/sms-gateway)
- [AroFlo Features - GPS Tracking](https://aroflo.com/features/gps-tracking-app)
- [AroFlo Features - Supplier Catalogue](https://aroflo.com/features/supplier-catalogue)
- [AroFlo Features - Purchase Orders](https://aroflo.com/features/purchase-orders)
- [AroFlo Features - Trade CRM](https://aroflo.com/features/trade-crm)
- [AroFlo Features - AroConnect](https://aroflo.com/features/aroconnect)
- [AroFlo Features - Maintenance](https://aroflo.com/features/maintenance-management-software)
- [AroFlo Features - Project Management](https://aroflo.com/features/project-management-software)
- [AroFlo Features - Field Service](https://aroflo.com/features/field-service-management-software)
- [AroFlo Features - AI Bill Scanner](https://aroflo.com/features/ai-bill-scanner)
- [AroFlo Integrations Page](https://aroflo.com/resources/integrations)
- [AroFlo + Xero](https://aroflo.com/integrations/xero-integration)
- [AroFlo + Stripe](https://aroflo.com/integrations/aroflo-stripe)
- [AroFlo + Reece](https://aroflo.com/integrations/reece-supplier-catalogue)
- [AroFlo + API Integration](https://aroflo.com/integrations/api-integration)

### AroFlo Help Documentation
- [AroFlo API Setup](https://help.aroflo.com/en_AU/general-settings/admin-aroflo-api)
- [AroFlo API Integration](https://help.aroflo.com/en_AU/integrations/aroflo-api)
- [Event Messages (Webhooks)](https://help.aroflo.com/en_AU/general-settings/admin-event-messages)
- [Custom Fields](https://help.aroflo.com/en_AU/general-settings/admin-custom-fields)
- [Custom Forms](https://help.aroflo.com/en_US/compliance-settings/admin-custom-forms)
- [Quote Markups](https://help.aroflo.com/quotes-office/office-quote-markups)
- [Google Calendar Sync](https://help.aroflo.com/users-office/office-google-calendar-sync)
- [Offline Mode](https://help.aroflo.com/en_US/field/field-offline)
- [User Types](https://help.aroflo.com/users-siteadmin/admin-user-types)
- [AroFlo FAQ](https://help.aroflo.com/en_US/getting-started/frequently-asked-questions)
- [Zapier Integration](https://help.aroflo.com/zapier/aroflo-zapier-app)
- [Supplier Connect](https://help.aroflo.com/en_AU/supplier-connect/office-place-an-order-using-supplier-connect)
- [Timesheet Automation](https://help.aroflo.com/hours-of-work/admin-timesheet-automation-conditions)
- [Work Order Imports](https://help.aroflo.com/import-work-orders/office-import-work-orders)

### API & Developer
- [AroFlo API Docs (Postman)](https://apidocs.aroflo.com/)
- [AroFlo Developer Hub](https://docs.api.aroflo.com/)
- [SyncHub AroFlo Data Model](https://www.synchub.io/connectors/aroflo/datamodel)
- [SyncHub AroFlo SQL](https://www.synchub.io/connectors/aroflo/sql)
- [SyncHub AroFlo to Power BI](https://www.synchub.io/aroflo-to-powerbi-connector)
- [Pipedream AroFlo](https://pipedream.com/apps/aroflo)

### Zapier
- [AroFlo HMAC Zapier Integrations](https://zapier.com/apps/aroflo-hmac/integrations)
- [AroFlo HMAC Zapier Setup](https://help.zapier.com/hc/en-us/articles/10879656777997)

### Make
- [AroFlo Make Integration](https://www.make.com/en/integrations/aroflo-community)

### Reviews
- [Capterra Reviews (114 reviews)](https://www.capterra.com/p/166811/AroFlo/reviews/)
- [G2 Reviews](https://www.g2.com/products/aroflo/reviews)
- [Software Advice Reviews](https://www.softwareadvice.com/calendar-app/aroflo-profile/reviews/)
- [GetApp Reviews](https://www.getapp.com/operations-management-software/a/aroflo/reviews/)
- [TrustRadius Reviews](https://www.trustradius.com/products/aroflo/reviews)
- [Nerdisa Review](https://nerdisa.com/aroflo/)
- [ITQlick Review](https://www.itqlick.com/aroflo-software)

### Comparisons
- [Best Job Management Software for Tradies (Tradie Flow)](https://tradieflow.net.au/blog/best-job-management-software-tradies-australia)
- [Tradify vs AroFlo (GetApp)](https://www.getapp.com/industries-software/a/tradify/compare/aroflo/)

### Make.com
- [AroFlo Make Community App](https://apps.make.com/aro-flo-tc0ggp-ubi0uy)

### Community
- [AroFlo Community Forum](https://forums.aroflo.com/)
- [AroFlo Webhooks Forum Post](https://forums.aroflo.com/t/webhooks-notifications-but-for-a-computer/420)
- [Power BI/API Discussion (Microsoft Fabric)](https://community.fabric.microsoft.com/t5/Desktop/AroFlo-data-via-API/td-p/3941497)

### Mobile App
- [AroFlo iOS App Store](https://apps.apple.com/us/app/aroflo-job-management/id6450022414)
- [AroFlo App Release Announcement](https://aroflo.com/blog/aroflo-app-release-announcement)

---

## APPENDIX A: COMPLETE API DATA MODEL (from SyncHub)

This is the full field-level data model for every entity accessible via the AroFlo API. This is the definitive reference for building any custom integration.

### Task (the core "job" entity)
```
Taskid, Description, Status, Priority, Taskname, Jobnumber, Custon
Duedate, Duedatetime, Requestdatetime, Completeddate, Completeddatetime
Lastupdateddatetimeutc, Lastupdatedutc, Readtask, Readtaskdatetime
Gpslatitude, Gpslongitude, Refcode, Linkprocessed, WebappEncodedID
Foreign keys: ClientID, ProjectID, OrganisationID, SubstatusID, TaskTypeID, LocationID, ContactID
```

### Client
```
Clientid, Clientname, Firstname, Surname, Shortname, Email, Phone, Mobile, Fax, Abn, Website
Dateinserted, Datetimeinserted, Datecreated, Terms, Termsnote, Postable, Usecustompriorities
MailingAddress: Country, Postcode, line1, line2, State, Suburb
Address: Country, Postcode, line1, line2, State, Suburb
Foreign key: TransactionTermID
```

### Quote
```
Quoteid, Quotename, Description, Type, Status, Acceptancestatus, Jobnumber, Refno, Custon
Totalex, Totalinc, Totaltax, Subtotal, Totalprofit, Totalprofitmarginpercent, Totalhours
Labourcostex, Materialcostex, Allowancecostex, Overallmarkuppercent, Istaxinclusive
Duedate, Duedatetime, Createddate, Createddatetime
Approveddate, Approveddatetime, Acceptancedate, Acceptancedatetime
Rejecteddate, Rejecteddatetime, Acceptanceexpirydate, Acceptanceexpirydatetime
Contactname, Contactphone, Exclusions, Quoteurl, Taskdescription
Address: postcode, state, suburb, line1, line2
Foreign keys: Clientid, Orgid, Projectid, Taskid, EstimatorUserID, Acceptedbyuserid, Substatusid
```

### QuoteLine
```
Description, Quantity, Cost, Sell, Tax, ItemID, Tracking fields
```

### Invoice
```
Invoiceid, Invoicenumber, Description, Status, Custon, Partinvoice
Totalinc, Totalex, Totalgst, Surchargeamount, IsTaxInclusive
Duedate, Dateinvoiced, Lastupdateddatetime
Address: Line1, Line2, Suburb, PostCode, State
Foreign keys: TaskID, ProjectID, OrganisationID, ClientID, UpdatedByUserID
```

### InvoiceLine
```
Description, Quantity, Cost, Sell, Tax, ItemID, Tracking fields
```

### Payment
```
Paymentid, Datepaid, Totalamount, Amount, Reference, Notes
Paymentmethodname, Bankname, Bankcode, Bankbranch, Bankaccountnumber, Chequenumber
Surchargeamount, Surchargepercentage, Datelinkprocessed
Foreign keys: LinkedToInvoiceID, ReceivedByUserID, Linkedtoid
```

### PurchaseOrder
```
Purchaseorderid, Ordernumber, Status, Acceptancestatus
Purchasedate, Duedate, Dateinvoiced, Datereceived, Deliverybydate, Deliverybydatetime
Totalex, Totalinc, IsTaxInclusive, Deliveryinstructions, Supplierinvoicenumber
Address: Line1, Line2, Suburb, PostCode, State
Foreign keys: OrganisationID, SupplierID, PurchasedByUserID
```

### PurchaseOrderLine
```
Description, Quantity, Cost, Sell, Tax, ItemID, PartNumber
```

### Schedule
```
Scheduleid, Startdatetime, Enddatetime, Hours, Note, Ishidden, Islocked
Inserteddatetimeutc, PeriodicID, GroupID
Foreign keys: OrganisationID, InsertedByUserID, ScheduledToUserID, TaskID
```

### Item (inventory)
```
Itemid, Description, Partnumber, Manufacturer, Supplier
Costex, Flexcost, UseSimplePricing
SellQte, SellInvc, SellTask (sell prices for quotes, invoices, tasks)
Invcmargin, Invcmarginon, Taskmargin, Taskmarginon
Foreign key: CategoryID
```

### InventoryCategory
```
Categoryid, Categoryname, Listorder, Issoritem, Defaultmargin, Marginon, Quoteusing
Bustockalertlevel, Usebustockalert (business unit stock alert)
Chstockalertlevel, Usechstockalert (channel stock alert)
Userstockalertlevel, Useusersstockalert (user/van stock alert)
Lastupdateddatetimeutc
Foreign key: ParentCategoryID (hierarchy)
```

### Supplier
```
Supplierid, Suppliername, Suppliertype, Firstname, Surname, Shortname
Email, Phone, Mobile, Fax, Abn, Website
Dateinserted, Datetimeinserted, Datecreated, Terms, Termsnote, Postable
```

### Bill (supplier invoice)
```
Billid, Billnumber, Description, Status, IsTaxInclusive
Totalinc, Totalex, Totalgst, Surchargeamount
Dateinvoiced, Duedate, Lastupdateddatetimeutc
Foreign keys: WorkOrderID, OrganisationID, SupplierID, PurchaseOrderID, LastUpdatedUserID
```

### Document
```
Documentid, Name, Url, Sizeinbytes, Comment, Filter
Uploadeddatetime
Foreign keys: UploadedByUserID, Categoryid
```

### Asset
```
Assetid, Assetname, Modelnumber, Serialnumber, Manufacturer, Ordercode, Barcode
Quantity, Cost, Odo, Odotype, Archived, Datecreated
Foreign keys: OrganisationID, ClientID, Customerid, SupplierID, AssetCategoryID
```

### Location
```
Locationid, Locationname, Address, Suburb, State, Postcode, Country
Gpslat, Gpslong, SiteContact, SiteEmail, SitePhone, Archived
Foreign keys: ClientID, SupplierID, BusinessUnitID
```

### Project
```
Projectid, Projectname, Projectnumber, Description, Status, ProjectType, Refno, Custon
Startdate, Enddate, Closeddate, Contact, Manager, Estpercentagenostage
Foreign keys: Locationid, Substatusid, ManagerUserID, InsertedByUserID, ContactUserID, Orgid, Projecttypeid
```

### TaskNote
```
Noteid, Note, Content, Sticky, Filter, Dateposted, Timeposted
Foreign keys: TaskID, Userid
```

### TaskLabour
```
Lineid, Worktype, Workdate, Starttime, Endtime, Hours, Cost, Sell, Note
Workdatetimestart, Workdatetimeend, Labverified, Labeodapproved, Lablocked
Foreign keys: TaskID, UserID
```

### TaskMaterial
```
Lineid, Quantity, Cost, Sell, Partnumber, Dateused, Isinventory
Purchaseorderisordered, Purchaseorderqtyordered, Purchaseorderqtybilled
Foreign keys: TaskID, Itemid
```

### Timesheet
```
Timesheetid, Type, Hours, Cost, Charge, Costrate, Chargerate, Hourlyrate
Workdate, Startdatetime, Finishdatetime, Note, Inserteddatetimeutc
GroupID, TSGroupID, OverheadID, OverheadName, OverheadType, OverheadUnit, Resourceoverheadrate
Foreign keys: UserID, InsertedByUserID, VerifiedByUserID, TaskID, WorktypeID, TrackingCenterID
```

### Custom Field Entities (same structure for all)
```
Fieldid, Name, Value, Type, Archived
Parent foreign key: TaskID / ClientID / AssetID / LocationID / ProjectID / UserID
```

---

## APPENDIX B: AROFLO GO vs FULL AROFLO — FEATURE MATRIX

Based on all available sources. "Unconfirmed" means not explicitly stated for Go tier.

| Feature | AroFlo Go ($39/user/mo) | Full AroFlo ($62-73/user/mo) |
|---------|-------------------------|------------------------------|
| **Pricing** | $39/user/month, min 1 user, $0 setup | $62-73/user/month, min 5 users, $2,900 setup |
| **Trial** | 14 days free | By arrangement |
| Job creation & management | YES | YES |
| Quoting | YES | YES |
| Scheduling | YES | YES |
| Timesheets | YES | YES |
| Materials tracking | YES | YES |
| Invoicing & payments | YES | YES |
| GPS tracking | YES | YES |
| Photo/document uploads | YES | YES |
| Mobile app (iOS/Android) | YES | YES |
| Offline mode | YES | YES |
| Xero/MYOB/QuickBooks integration | YES | YES |
| Client markups & price levels | **NO** | YES |
| Asset management | **NO** | YES |
| Compliance forms (SWMS, JSA) | **NO** | YES |
| Custom compliance form builder | **NO** | YES |
| Recurring/maintenance jobs | **NO** | YES |
| Project management & Gantt | **NO** | YES |
| Multi-business units | **NO** | YES |
| Contractor user access | **NO** | YES |
| AroConnect | **NO** | YES |
| Advanced inventory (kits, assemblies) | **UNCONFIRMED** | YES |
| Purchase orders | **UNCONFIRMED** | YES |
| Supplier catalogues (Reece) | **UNCONFIRMED** | YES |
| Custom fields | **UNCONFIRMED** | YES |
| API access | **UNCONFIRMED (CRITICAL)** | YES (must request) |
| Zapier integration | **UNCONFIRMED (CRITICAL)** | YES |
| Event messages / webhooks | **UNCONFIRMED (CRITICAL)** | YES |
| SMS gateway integration | **UNCONFIRMED** | YES |
| Custom reports | **UNCONFIRMED** | YES |
| Trade CRM | **UNCONFIRMED** | YES |

**The "UNCONFIRMED" items are deal-breakers for our automation plans. Must verify with AroFlo sales before committing.**

---

## APPENDIX C: MOBILE APP DETAILS

**App name:** AroFlo - Job Management
**Developer:** AROFLO INNOVATIONS PTY LTD
**Current version:** 1.1.10 (released 25 March 2026)
**Platforms:** iOS (15.0+) and Android
**Size:** 48.6 MB
**Rating:** Not enough ratings to display (newer app)

**What Beau can do on mobile:**
- Create new tasks/jobs
- View and update existing tasks
- Record labour (start/stop timer, manual entry)
- Add materials to jobs
- Add expenses to jobs
- Take and attach photos (camera integration)
- Capture client signatures (online and offline)
- Create simple quotes (quote builder)
- Create and send invoices (final, part, and deposit invoices)
- View and update schedule
- Barcode scanning
- GPS location capture
- Complete compliance checklists (full AroFlo only)
- Speech-to-text input (added in recent update)
- Camera measurements (added in recent update)

**Offline mode:**
- Choose existing tasks to make available offline
- Tasks stored locally on device
- Create new tasks offline
- Record labour, materials, expenses offline
- Capture signatures offline
- Changes merged back when connectivity returns
- Version 1.1.0 introduced "offline mode MVP" -- still maturing

**Limitations:**
- Photo upload can fail in poor internet areas
- Offline mode is task-level (must pre-select tasks to take offline)
- Not all features available offline
- Quote builder is "simple" -- complex quotes need Office (desktop)
