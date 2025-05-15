import Header from "@/components/header";
import Footer from "@/components/footer";
import ApplyForm from "@/components/apply-form";

function Apply() {
	return (
		<>
			<Header />
			<div className="mx-auto px-4 w-full max-w-screen-xl">
				<ApplyForm />
			</div>
			<Footer />
		</>
	);
}

export default Apply;
