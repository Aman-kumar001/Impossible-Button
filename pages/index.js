import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

export default function Home() {
	const route = useRouter();
	return (
		<div>
			<ul>
				<li onClick={() => route.push('/Page1')}>Page 1</li>
				<li onClick={() => route.push('/Page2')}>Page 2</li>
			</ul>
		</div>
	);
}
