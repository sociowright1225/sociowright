// app/portfolio/[slug]/page.js

import PortfolioDetails from "./PortfolioDetails";

export default async function Page({ params }) {
  // params must be awaited in latest Next.js
  const resolvedParams = await params;

  return <PortfolioDetails params={resolvedParams} />;
}
