import './ExploreContainer.css';

interface ContainerProps {
	name: string;
}

const ExploreContainer = ({ name }: ContainerProps) => {
	return (
		<div class="container">
			<strong>{name}</strong>
			<p>
				Explore{' '}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://ionicframework.com/docs/components"
				>
					UI Components
				</a>
			</p>
		</div>
	);
};

export default ExploreContainer;
