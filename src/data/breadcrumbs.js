// Custom breadcrumb configurations for specific pages
export const customBreadcrumbs = {
  // Discovery Flight should show as a direct service, not nested
  "/discovery-flight": [
    { label: "Home", href: "/" },
    { label: "Discovery Flight" },
  ],

  // Why Become a Pilot is more of a standalone info page
  "/why-become-a-pilot": [
    { label: "Home", href: "/" },
    { label: "New to Flying?", href: "#" },
    { label: "Why Become a Pilot?" },
  ],

  // Contact and Enrollment are top-level actions
  "/contact-us": [{ label: "Home", href: "/" }, { label: "Contact Us" }],

  "/enrollment-form": [{ label: "Home", href: "/" }, { label: "Enroll Now" }],

  // Blog posts should show blog hierarchy
  "/blog": [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Blog" },
  ],

  // Error pages
  "/404": [{ label: "Home", href: "/" }, { label: "Page Not Found" }],

  "/500": [{ label: "Home", href: "/" }, { label: "Server Error" }],
};

// Page categories for better breadcrumb organization
export const pageCategories = {
  "pilot-training": {
    label: "Pilot Training",
    href: "/pilot-training",
  },
  "add-on": {
    label: "Add-Ons",
    href: "/add-on",
  },
  about: {
    label: "About Us",
    href: "/about",
  },
  blog: {
    label: "Blog",
    href: "/blog",
  },
};

// Enhanced breadcrumb generation function
export function generateEnhancedBreadcrumbs(url, currentPageTitle) {
  const pathname = url.pathname;

  // Check for custom breadcrumb configuration first
  if (customBreadcrumbs[pathname]) {
    return customBreadcrumbs[pathname];
  }

  // Handle blog post breadcrumbs specially
  if (pathname.startsWith("/blog/") && pathname !== "/blog/") {
    return [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Blog", href: "/blog" },
      { label: currentPageTitle || "Post" },
    ];
  }

  // Default breadcrumb generation with enhanced categories
  const segments = pathname.split("/").filter((segment) => segment !== "");
  const breadcrumbs = [{ label: "Home", href: "/" }];

  if (segments.length === 0) {
    return breadcrumbs;
  }

  let currentPath = "";

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    currentPath += `/${segment}`;

    const isLastSegment = i === segments.length - 1;

    // Use category information if available
    let label = segment;
    let href = currentPath;

    if (pageCategories[segment]) {
      label = pageCategories[segment].label;
      href = pageCategories[segment].href;
    } else {
      // Custom segment mapping
      const segmentLabels = {
        "private-pilot": "Private Pilot",
        "instrument-pilot": "Instrument Pilot",
        "commercial-pilot": "Commercial Pilot",
        "external-load-training": "External Load Training",
        "private-helicopter-add-on": "Private Helicopter Add-On",
        "instrument-helicopter-add-on": "Instrument Helicopter Add-On",
        "commercial-helicopter-add-on": "Commercial Helicopter Add-On",
        "our-story": "Our Story",
        "our-chief-pilot": "Our Chief Pilot",
        "our-fleet": "Our Fleet",
        pricing: "Pricing",
        "discovery-flight": "Discovery Flight",
        "why-become-a-pilot": "Why Become a Pilot?",
        "contact-us": "Contact Us",
        "enrollment-form": "Enroll Now",
      };

      if (segmentLabels[segment]) {
        label = segmentLabels[segment];
      } else {
        // Convert kebab-case to Title Case as fallback
        label = segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }
    }

    // Use current page title for last segment if provided
    if (isLastSegment && currentPageTitle) {
      label = currentPageTitle;
    }

    breadcrumbs.push({
      label,
      href: isLastSegment ? undefined : href,
    });
  }

  return breadcrumbs;
}
