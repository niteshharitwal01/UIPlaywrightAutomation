# Rahul Shetty Client Test Plan

## Application Overview

Exploratory test plan for Rahul Shetty Academy client app (https://rahulshettyacademy.com/client/). Covers authentication, product browsing, cart and checkout flows, validations, session behavior, and accessibility/responsiveness checks. Assumes a fresh browser state for each scenario and a test account where required.

## Test Scenarios

### 1. Rahul Client Critical Paths

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login - Happy Path

**File:** `tests/001-login-happy.spec.ts`

**Steps:**
  1. Open the app at https://rahulshettyacademy.com/client/
    - expect: Login page loads with fields: email, password, and Login button
  2. Enter valid credentials (use test account) and click Login
    - expect: User is redirected to product listing (URL contains '#/dashboard' or products visible)
    - expect: User name or logout button is visible
    - expect: At least one product card is displayed

#### 1.2. Login - Invalid Credentials

**File:** `tests/002-login-invalid.spec.ts`

**Steps:**
  1. Open the login page
    - expect: Login form visible
  2. Enter invalid email or wrong password and click Login
    - expect: An error toast/message appears with appropriate validation text
    - expect: User remains on the login page

#### 1.3. Search & Filter Products

**File:** `tests/003-search-filter.spec.ts`

**Steps:**
  1. From the product listing, use the search input to search for a known product name
    - expect: Search results update and product cards matching the query are visible
  2. Apply any available category or price filters
    - expect: Results are filtered accordingly and UI shows active filter indicators

#### 1.4. Add To Cart and Update Quantity

**File:** `tests/004-add-to-cart.spec.ts`

**Steps:**
  1. On a product card click 'Add to Cart' for a specific product
    - expect: Cart counter increments and a mini-cart or cart icon indicates items present
  2. Open the cart or navigate to cart page, increase quantity of the item
    - expect: Item quantity updates, line total and cart subtotal update accordingly

#### 1.5. Remove Item and Empty Cart

**File:** `tests/005-remove-cart.spec.ts`

**Steps:**
  1. Add two different products to the cart
    - expect: Cart shows two line items
  2. Remove one item and then remove the remaining item so cart is empty
    - expect: Removed items disappear and cart shows empty state with appropriate message

#### 1.6. Checkout - Happy Path (Place Order)

**File:** `tests/006-checkout-happy.spec.ts`

**Steps:**
  1. With items in cart, proceed to Checkout
    - expect: Checkout form/page is displayed with address and payment fields (or order summary)
  2. Fill required shipping details and select payment method (use test mode where applicable), submit order
    - expect: Order is accepted and user sees an order confirmation page or order id
    - expect: Order appears in user's orders/history (if available)

#### 1.7. Checkout - Validation and Error Handling

**File:** `tests/007-checkout-validation.spec.ts`

**Steps:**
  1. Proceed to Checkout without filling required fields (e.g., address)
    - expect: Form shows inline validation errors and prevents submission
  2. Enter invalid data formats (e.g., incorrect phone or postal code) and try to submit
    - expect: Validation messages shown and submission blocked

#### 1.8. Cart Persistence Across Sessions

**File:** `tests/008-cart-persistence.spec.ts`

**Steps:**
  1. Login with a test account, add an item to cart
    - expect: Cart contains the added item
  2. Logout, then log back in with same account
    - expect: Cart still contains the previously added item (or app documents expected persistence behavior)

#### 1.9. Session Management and Logout

**File:** `tests/009-session.spec.ts`

**Steps:**
  1. Login, then explicitly click Logout
    - expect: User is returned to login page and protected routes redirect to login
  2. Simulate session timeout by clearing auth token or waiting (if supported) and try accessing a protected page
    - expect: User is redirected to login and cannot access protected resources without re-authenticating

#### 1.10. Responsiveness & Accessibility Basics

**File:** `tests/010-accessibility-responsive.spec.ts`

**Steps:**
  1. Load the app in mobile viewport (e.g., 375x812) and tablet viewport
    - expect: Layout adapts: navigation and product grid respond to viewport size
    - expect: Primary actions remain reachable
  2. Run basic accessibility checks: keyboard navigation through main flows, and ensure images have alt text and form fields have labels
    - expect: Primary controls reachable via keyboard, focus order logical, and no missing critical labels
