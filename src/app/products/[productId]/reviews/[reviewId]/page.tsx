import {notFound} from "next/navigation";

const ReviweDetail = ({
  params,
}: {
  params: {productId: string; reviewId: string};
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Review {params.reviewId} for Product {params.productId}
      </h1>
    </div>
  );
};

export default ReviweDetail;
