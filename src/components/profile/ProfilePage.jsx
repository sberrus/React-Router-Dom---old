import React from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
	const { username } = useParams();
	return (
		<div>
			<h2>Profile Page: {username}</h2>
		</div>
	);
};

export default ProfilePage;
