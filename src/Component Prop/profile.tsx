export type ProfileProp = {
  name: string;
};

export const Profile = ({ name }:ProfileProp) => {
  return <div>Hey, {name} I am a Profile component</div>;
};
