import PortfolioDetails from "./PortfolioDetails";

export default async function PortfolioPage({ params }) {
  const { slug } = await params;  

  return <PortfolioDetails slug={slug} />;
}
