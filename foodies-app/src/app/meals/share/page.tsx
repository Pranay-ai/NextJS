
import ImagePicker from "@/components/ImagePicker";
import { shareMeal } from "@/utils/server-actions";
import ShareMealsForm from "@/components/ShareMealsForm";

export default function ShareMealPage() {



  return (
    <div className="bg-gray-800 min-h-screen p-5 flex flex-col items-center">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-orange-500">
          Share your <span className="italic">favorite meal</span>
        </h1>
        <p className="pt-3 text-3xl text-shadow-lg text-orange-500">
          Or any other meal you feel needs sharing!
        </p>
      </header>
      <main className="w-full max-w-2xl">
        <form className="bg-gray-700 p-9 rounded-lg shadow-lg flex flex-col gap-6"  action={shareMeal}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-orange-300 mb-2">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-orange-300 mb-2">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="title" className="block text-orange-300 mb-2"  >  Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label htmlFor="summary" className="block text-orange-300 mb-2">Short Summary</label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label htmlFor="instructions" className="block text-orange-300 mb-2">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

            <ImagePicker />

          <div className="text-center mt-6">
            <ShareMealsForm/>
          </div>
        </form>
      </main>
    </div>
  );
}
