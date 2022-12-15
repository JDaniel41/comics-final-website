import {
    BoltIcon,
    DevicePhoneMobileIcon,
    GlobeAltIcon,
    ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
    {
        name: "$15 - Elmville Citizen!",
        description:
            "Every citizen of Elmville needs to know how to get around, and if you support us at this level you'll receive a Kershl-drawn poster map of Elmville!",
        icon: GlobeAltIcon,
    },
    {
        name: "$30 - Hudol Student",
        description:
            "As a student at the Hudol Academy, you're gonna need some books for your studies. If you support us at this level, we'll give you a signed softcover edition of our first issue of Diviniation Dillema!",
        icon: ScaleIcon,
    },
    {
        name: "$45 - Aguefort Student ",
        description:
            "While the Aguefort Academy might not have the same books as the Hudol Academy, they have figurines! As an Aguefort student you'll receive a figurine of our hero, Adaine!",
        icon: BoltIcon,
    },
    {
        name: "$50 - KNB Bank Employee",
        description:
            "They may be the center of the scandal, but we don't judge you for working there. If you support us at this level, we'll give you a signed hardcover edition of our first issue!",
        icon: DevicePhoneMobileIcon,
    },
    {
        name: "$75 - Nightmare King Cultise",
        description:
            "Y'know, maybe cults aren't that bad. After all, some of them can be fun! If you support us at this level, we'll add your own background character into the story!",
        icon: DevicePhoneMobileIcon,
    },
    {
        name: "$100 - President of the AV Club",
        description:
            "Every child's dream is to become President. After all, its the most powerful position in the world! If you support us at this level, you will receive a special edition cover of our very first issue.",
        icon: DevicePhoneMobileIcon,
    },
];

export default function Example() {
    return (
        <div className="bg-orange-200 py-2 sm:py-2 lg:py-10" id="givinglevels">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="sm:text-center">
                    <h2 className="text-lg font-semibold leading-8 text-indigo-600">
                        Support us from the beginning!
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Giving Levels!
                    </p>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        We would greatly appreciate your support on our journey,
                        and offer the following benefits for your contributions!
                    </p>
                </div>

                <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                    <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                            >
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-lg font-semibold leading-8 text-gray-900">
                                        {feature.name}
                                    </p>
                                    <p className="mt-2 text-base leading-7 text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
