import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleProduct";
import productsData from "./productsData";
import ViewMore from "./viewMore";

const Products = () => {

  return (
    <>
      <section id="Products" className="py-4 md:py-6 lg:py-10">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {productsData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          <ViewMore />
        </div>
      </section>
    </>
  );
};

export default Products;
