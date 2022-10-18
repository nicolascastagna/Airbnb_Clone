import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import { dateParser } from "../components/Utils";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numberGuests } = router.query;

  return (
    <div className="h-screen">
      <Header
        placeholder={`${location} | ${dateParser(startDate)} | ${dateParser(
          endDate
        )} | ${numberGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {dateParser(startDate)} - {dateParser(endDate)} -{" "}
            {numberGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ml-1">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Room and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
