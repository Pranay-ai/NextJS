import { getNewsItem } from "@/utils/news";
import ImageModal from "@/components/ImageModal";
export default async function PageIntercept({
  params,
}: {
  params: { newsId: string };
}) {
  const news = await getNewsItem(params.newsId);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur">
        <ImageModal />

        <dialog open className="relative  bg-white p-4 rounded-md shadow-lg">
          <img
            src={`/images/news/${news?.image}`}
            alt=""
            width={480}
            height={480}
          />
        </dialog>
      </div>
    </>
  );
}
