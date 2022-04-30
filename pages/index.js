import LoadingBar from '../components/loadingbar';
import { useState } from 'react';
import { Range } from 'react-range';

export default function Home() {

	const [progress, setProgress] = useState(50);

	function handleProgress() {
		setProgress(document.getElementById('slider').value);
	}

	return (
		<div>
			<LoadingBar progress={progress}/>
			<input id="slider" min={4} className="slider" type="range" onChange={handleProgress}/>
		</div>
	)
}