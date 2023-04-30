import { GoPrimitiveDot } from 'react-icons/go'

const features = [
  {
    name: 'Phone: (+62) 81 314239',
    icon: GoPrimitiveDot,
  },
  {
    name: 'Mon - Fri: 09.00 AM - 22.00 PM',
    icon: GoPrimitiveDot,
  },
  {
    name: 'Location: Jalan Sunset Road No.20',
    icon: GoPrimitiveDot,
  },
  {
    name: 'Sat: 09.00 AM - 15.00 PM',
    icon: GoPrimitiveDot,
  },
  {
    name: 'Email: investmoon@domain.com',
    icon: GoPrimitiveDot,
  },
  {
    name: 'Sunday: Closed',
    icon: GoPrimitiveDot,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div></div>
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-xl">
              <h2 className="text-base font-semibold leading-7 text-indigo-600 capitalize">Get In Touch</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl capitalize">Contact Us To Get More Information</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <dl className="grid max-w-xl grid-cols-2 gap-x-2 gap-y-1 lg:max-w-none lg:grid-cols-2 lg:gap-y-5 mt-4">
                {features.map((feature) => (
                <div key={feature.name} className="relative pl-8">
                    <dt className="text-xs lg:text-sm font-semibold leading-7 text-gray-900">
                    <div className="absolute left-1 top-1 flex">
                        <feature.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                    </div>
                    {feature.name}
                    </dt>
                    {/* <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd> */}
                </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
