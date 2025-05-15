import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer";
import Organizers from "@/components/organizers";
import ScheduleSection from "@/components/schedule";
import Speakers from "@/components/speakers";
import Sponsors from "@/components/sponsors";
import Stats from "@/components/stats";

function App() {
	return (
		<>
			<Header />
			<div className="mx-auto px-4 w-full max-w-screen-xl">
				<Hero />
				<Stats />
				<About />
				<Speakers />
				<ScheduleSection />
				<Sponsors />
				<Organizers />
				{/* <FAQs /> */}
			</div>
			<Footer />
		</>
	);
}

export default App;
