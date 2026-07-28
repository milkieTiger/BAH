# Website Lifecycle

## Overview

The BAH website changes throughout the year according to the convention timeline.

Rather than deploying multiple versions of the website, the application operates under a single **Website State**. The frontend and backend use this state to determine which pages, features, and actions are available.

---

# Website States

| Code | Name                      | Description                                                                         |
| ---- | ------------------------- | ----------------------------------------------------------------------------------- |
| D    | Dormant                   | Default off-season website. Only evergreen content is available.                    |
| T    | Teaser                    | Convention theme is announced. Limited convention information becomes available.    |
| A    | Announcement              | Convention website officially launches. Account creation opens.                     |
| TR   | Ticket Registration       | Ticket registration opens. Attendee profile editing is available.                   |
| RC   | Registration Closed       | Ticket registration closes. Dealer and panel submissions remain available.          |
| FIR  | Final Information Release | Final attendee information is published including schedule and Dealer's Den layout. |

---

# Lifecycle Timeline

```text
Dormant
    ↓
Teaser
    ↓
Announcement
    ↓
Ticket Registration
    ↓
Registration Closed
    ↓
Final Information Release
```

---

# State Behavior

## Dormant (D)

### Purpose

Off-season website.

### Available

- Evergreen pages
- Volunteer application

### Unavailable

- Theme pages
- Ticket registration
- Account creation
- Convention information

---

## Teaser (T)

### Purpose

Reveal the yearly convention.

### Available

- Theme landing page
- Convention information
- Travel guide
- Art submission

---

## Announcement (A)

### Purpose

Convention website officially launches.

### Available

- Full yearly theme website
- Account creation
- Profile customization

---

## Ticket Registration (TR)

### Purpose

Attendee registration period.

### Available

- Ticket purchase
- Profile editing
- Registration management

---

## Registration Closed (RC)

### Purpose

Registration is closed while organizer submissions continue.

### Available

- Dealer submission
- Panel submission

### Disabled

- Ticket purchase
- New attendee registration

---

## Final Information Release (FIR)

### Purpose

Prepare attendees for the convention.

### Available

- Event schedule
- Dealer's Den layout
- Booth listings
- Badge pickup selection

### Disabled

- Profile editing
- Registration modification
