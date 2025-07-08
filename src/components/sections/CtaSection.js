import { SectionHeading } from "#/SectionHeading";
import { Button } from "../base";

export function CtaSection({ title, description, buttons, ...rest }) {
	return (
		<section className="bg-base-100 dark:bg-base-900 py-20 md:px-4" {...rest}>
			<div className="container mx-auto px-4 py-10 rounded-3xl ">
				<div className="max-w-2xl flex flex-col justify-center items-center mx-auto">
					<SectionHeading
						align="center"
						title={title}
						description={description}
						buttons={buttons}
					/>
					<div className="flex items-center gap-4 mt-8 justify-center">
						<input
							type="email"
							placeholder="Type your email here"
							className="py-3 px-6 rounded-full w-80 max-w-full"
						/>
						<Button href="/" label="Subscribe" />
					</div>
				</div>
			</div>
		</section>
	);
}
