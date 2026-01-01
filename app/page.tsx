import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import Catalogues from './components/Catalogues';
import Footer from './components/Footer';
import AnchorLink from './components/AnchorLink';
import {
  ArrowRightIcon,
  ChevronDownIcon,
  CarIcon,
  CubeIcon,
  GlobeIcon,
  ShieldCheckIcon,
  ClockIcon,
  LocationIcon,
  BuildingIcon,
  UsersIcon,
  MailIcon,
  WeChatIcon,
  WhatsAppIcon,
} from './components/Icons';

const company = {
  name: 'Shandong Xize Automotive Technology Co., Ltd',
  tagline: 'Your Trusted Partner for Quality Auto Parts',
  yearsExperience: 30,
  storeCount: 10,
  warehouseSize: 2000,
  employeeCount: 100,
};

const contact = {
  wechat: 'LCJ7789395696',
  whatsapp: '+1 (236) 881-8788',
  email: 'xize.autoparts@gmail.com',
};

const address =
  'No. 10, Qingdao Road Rongtong Auto Parts City, Unit 1-7, Jinan, Shandong Province, China';

const facebook = 'https://www.facebook.com/share/1HF6cNtTG1/?mibextid=wwXIfr';

const services = [
  {
    Icon: CarIcon,
    title: 'Products',
    desc: 'Extensive inventory of genuine and aftermarket parts for BYD and Volkswagen vehicles, including electric and hybrid models.',
  },
  {
    Icon: CubeIcon,
    title: 'Wholesale and Retail',
    desc: 'Bulk orders with competitive pricing for dealers and distributors, plus walk-in retail at our 10+ stores.',
  },
  {
    Icon: GlobeIcon,
    title: 'Export Services',
    desc: 'Expanding our international reach with reliable export services. Contact us for overseas orders.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Quality Assurance',
    desc: 'All parts undergo rigorous quality checks. We stand behind every product we sell with full support.',
  },
];

const whyUsItems = [
  {
    Icon: ClockIcon,
    title: '30 Years Experience',
    desc: 'Nearly three decades of expertise in the automotive parts industry',
  },
  {
    Icon: LocationIcon,
    title: '10+ Locations',
    desc: 'Chain stores across Shandong Province for convenient access',
  },
  {
    Icon: BuildingIcon,
    title: '2,000m² Warehouse',
    desc: 'Massive inventory ready for immediate dispatch',
  },
  { Icon: UsersIcon, title: '100+ Employees', desc: 'Professional team dedicated to serving you' },
];

export default function Home() {
  return (
    <>
      <Navigation />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            poster="/images/background.jpeg"
          >
            <source src="/videos/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-primary-900/70"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">{company.name}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-primary-100 sm:text-2xl">
            {company.tagline}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-200">
            Professional automotive parts for BYD and Volkswagen vehicles. Nearly 30 years of
            industry expertise serving customers worldwide.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <AnchorLink
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-lg font-medium text-white shadow-sm transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Get in Touch
            </AnchorLink>
            <AnchorLink
              href="#about"
              className="inline-flex items-center justify-center rounded-lg bg-primary-100 px-8 py-4 text-lg font-medium text-primary-700 transition-colors hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Learn More
            </AnchorLink>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="h-6 w-6 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Our Company
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Your trusted partner in automotive parts distribution
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                <strong className="text-gray-900">{company.name}</strong> is a professional
                automotive parts company specializing in the wholesale and retail of parts primarily
                for <strong className="text-primary-600">BYD</strong> and{' '}
                <strong className="text-primary-600">Volkswagen</strong> vehicles.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                With nearly{' '}
                <strong className="text-gray-900">30 years of industry experience</strong>, we
                operate over 10 chain stores across Shandong Province and other regions. We have
                approximately{' '}
                <strong className="text-gray-900">2,000 square meters of warehouse space</strong>{' '}
                and a team of around 100 employees.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                We are currently expanding our{' '}
                <strong className="text-primary-600">auto parts export services</strong>. Feel free
                to contact us if you&apos;re interested in partnering with a reliable supplier!
              </p>
              <AnchorLink
                href="#contact"
                className="inline-flex items-center font-medium text-primary-600 transition-colors hover:text-primary-700"
              >
                Contact us today
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </AnchorLink>
            </div>

            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-xl bg-white p-6 text-center shadow">
                    <div className="text-4xl font-bold text-primary-600">
                      {company.yearsExperience}
                    </div>
                    <div className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-600">
                      Years Experience
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-6 text-center shadow">
                    <div className="text-4xl font-bold text-primary-600">{company.storeCount}+</div>
                    <div className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-600">
                      Chain Stores
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-6 text-center shadow">
                    <div className="text-4xl font-bold text-primary-600">
                      {company.warehouseSize}
                    </div>
                    <div className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-600">
                      m² Warehouse
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-6 text-center shadow">
                    <div className="text-4xl font-bold text-primary-600">
                      {company.employeeCount}+
                    </div>
                    <div className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-600">
                      Employees
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Company Gallery
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Take a look at our facilities, warehouse, and team
            </p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* Catalogues Section */}
      <section id="catalogues" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Product Catalogues
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Check out our catalogues to explore our full range of auto parts
            </p>
          </div>
          <Catalogues />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Comprehensive automotive parts solutions for your needs
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <div
                key={i}
                className="group rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                  <service.Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="bg-primary-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose Xize Auto Parts?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-200">
              Decades of experience, unmatched quality, and customer-first service
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyUsItems.map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-800 text-primary-200">
                  <item.Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-primary-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Ready to partner with us? Get in touch through any of these channels
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <WeChatIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">WeChat</h3>
              <p className="mt-2 text-gray-600">Scan to connect</p>
              <img
                src="/images/contacts/Wechat_QR.png"
                alt="WeChat QR Code"
                className="mt-4 h-40 w-40 rounded-lg object-contain"
              />
              <p className="mt-2 font-mono text-sm text-primary-600">{contact.wechat}</p>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <WhatsAppIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">WhatsApp</h3>
              <p className="mt-2 text-gray-600">Scan to chat</p>
              <img
                src="/images/contacts/WhatsApp_QR.png"
                alt="WhatsApp QR Code"
                className="mt-4 h-40 w-40 rounded-lg object-contain"
              />
              <p className="mt-2 font-mono text-sm text-primary-600">{contact.whatsapp}</p>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <MailIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Email</h3>
              <p className="mt-2 text-gray-600">Send us an inquiry</p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-4 inline-flex w-full min-w-0 items-center justify-center rounded-lg bg-primary-600 px-4 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <MailIcon className="mr-2 h-5 w-5 flex-shrink-0" />
                <span className="break-all text-center">{contact.email}</span>
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600">
              <LocationIcon className="mr-2 inline-block h-5 w-5 text-primary-600" />
              {address}
            </p>
          </div>
        </div>
      </section>

      <Footer address={address} email={contact.email} facebook={facebook} />
    </>
  );
}
