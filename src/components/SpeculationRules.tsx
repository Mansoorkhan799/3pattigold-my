const RULES_JSON = JSON.stringify({
  prefetch: [
    {
      source: "document",
      where: {
        and: [
          { href_matches: "/*" },
          {
            not: {
              href_matches: ["/api/*", "/admin/*", "/*\\?(.+)"],
            },
          },
          { not: { selector_matches: 'a[rel~="nofollow"]' } },
          { not: { selector_matches: ".no-prefetch, .no-prefetch a" } },
        ],
      },
      eagerness: "conservative",
    },
  ],
});

export default function SpeculationRules() {
  return (
    <script
      key="speculation-rules"
      type="speculationrules"
      dangerouslySetInnerHTML={{ __html: RULES_JSON }}
    />
  );
}
