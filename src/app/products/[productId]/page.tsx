import {Metadata} from "next";

export const generateMetadata = async ({params}: TProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`iPhone ${params.productId}`), 100);
  });
  return {
    title: `Product ${title}`,
    openGraph: {
      images: [
        "https://cdn3d.iconscout.com/3d/premium/thumb/product-5806313-4863042.png",
      ],
    },
  };
};

type TProps = {
  params: {
    productId: string;
  };
};

const ProductDetailsPage = ({params}: TProps) => {
  return (
    <div>
      <h1>Product Details Page {params.productId}</h1>
    </div>
  );
};

export default ProductDetailsPage;
