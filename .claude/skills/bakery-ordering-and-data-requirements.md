---
name: bakery-ordering-and-data-requirements
description: Ordering system, pickup scheduling, and data requirements for the Golden Crust Bakery site. Load this skill when building the ordering UI, pickup flow, email signup, or any data-collecting feature.
---

# Golden Crust Bakery — Ordering & Data Requirements

## Online Ordering (UI Only)

### What This Is
A visual ordering interface for the demo site. No backend processing — this is a UI demonstration of how online ordering would work for a bakery.

### Ordering Flow
1. **Browse menu** — customer views categorized baked goods
2. **Add to order** — customer selects items and quantities
3. **Choose pickup time** — customer picks a date and time slot
4. **Enter details** — customer provides name, phone, email
5. **Confirm order** — summary screen with order details
6. **Confirmation** — "Order received!" message

### Order Form Fields
| Field | Type | Required | Notes |
|---|---|---|---|
| Full name | text | yes | |
| Phone number | tel | yes | For pickup notifications |
| Email | email | yes | For order confirmation |
| Pickup date | date | yes | Tomorrow minimum, 7-day window |
| Pickup time | select | yes | Preset time slots |
| Special instructions | textarea | no | Allergies, modifications |

### Pickup Time Slots
Display as selectable options:
- Morning: 7:00 AM, 8:00 AM, 9:00 AM, 10:00 AM
- Midday: 11:00 AM, 12:00 PM, 1:00 PM
- Afternoon: 2:00 PM, 3:00 PM, 4:00 PM

### UI Requirements
- Cart/order summary visible during ordering
- Item quantities adjustable (+ / - buttons)
- Running total displayed
- Clear "Remove" option for each item
- Mobile-friendly: easy thumb navigation
- Confirm button should feel safe and clear

### Demo Behavior
- Form validates client-side (required fields, email format)
- Submit shows a success message (no actual backend call)
- Success message: "Order received! We'll have it ready for you."
- Optional: store in localStorage for demo persistence

## Pickup Scheduling UI

### Calendar/Date Picker
- Show next 7 days
- Today is not selectable (need prep time)
- Display day of week + date
- Highlight selected date

### Time Slot Picker
- Grid or list of available times
- Selected state: gold highlight
- Unavailable slots: grayed out (for realism)
- Show "Morning" / "Midday" / "Afternoon" groupings

## Email Signup

### Purpose
Build a mailing list for updates, new items, seasonal menus, and special offers.

### Form Fields
| Field | Type | Required | Notes |
|---|---|---|---|
| Email | email | yes | |
| First name | text | no | For personalization |

### Behavior
- Validate email format client-side
- Submit shows success message
- Success: "You're in! Watch your inbox for fresh updates."
- No actual backend — demo only

### Placement
- Dedicated section between Testimonials and Location
- Optional: subtle footer signup as secondary placement
- Never a popup or modal — inline only

## Menu Display System

### Categories
Display menu items grouped by category:
1. **Breads** — sourdough, whole grain, specialty
2. **Pastries** — croissants, danishes, scones, muffins
3. **Seasonal** — rotating items (currently: [PLACEHOLDER])
4. **Drinks** — coffee, tea (if included)

### Menu Item Display
Each item shows:
- Item name (required)
- Short description (1-2 sentences)
- Price (use realistic Sioux Falls pricing)
- Image (if available)
- Dietary tags (optional: GF, Vegan, etc.)
- "Add to Order" button

### Suggested Pricing (realistic mid-tier)
| Category | Price Range |
|---|---|
| Sourdough loaf | $7 – $9 |
| Specialty bread | $8 – $12 |
| Croissant | $4 – $5 |
| Danish / pastry | $4 – $6 |
| Muffin / scone | $3 – $5 |
| Coffee | $3 – $5 |
| Seasonal special | $6 – $10 |

### Filtering / Navigation
- Category tabs or buttons at top of menu section
- Smooth scroll or filter to selected category
- "All" view shows everything
- Mobile: horizontal scroll tabs

## Data Privacy (Demo Notes)
- No real data is collected or stored
- Forms are for UI demonstration only
- If this were a real site, privacy policy and terms would be needed
- No payment processing UI (ordering is pre-payment in this demo)
