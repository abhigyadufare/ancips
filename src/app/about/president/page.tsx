import PageHero from '@/components/PageHero'
import Section from '@/components/Section'

export default function PresidentMessagePage() {
  return (
    <>
      <PageHero
        title="President's Message"
        subtitle="A message from the President of the Central Zone Indian Psychiatric Society."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
          { label: "President's Message" },
        ]}
      />

      <section className="section-padding mesh-bg">
        <div className="container-custom max-w-3xl">
          <Section>
            <div className="relative p-8 md:p-12 rounded-3xl bg-white border border-teal-100 shadow-xl shadow-teal-900/5">
              <div className="absolute top-8 left-10 text-8xl font-display text-teal-50 leading-none select-none">
                "
              </div>
              <div className="relative z-10 space-y-5 text-teal-700 font-body leading-relaxed text-base md:text-lg pt-8">
                <p>Dear Seniors and colleagues , </p>
                <p>
                  We each as mental health professional bring something unique
                  to our service of mankind. When our skills, passions and
                  experiences come together, something extraordinary happens.
                  Our conferences don’t just give us opportunity to meet and
                  knowledge sharing ,they help bring out the very best in us.
                  They’re places where we can grow, connect and truly make a
                  difference. In the{" "}
                  <strong className="text-teal-800">
                    Annual Conference of Central Psychiatric Society
                  </strong>{" "}
                  again ,you’ll see that spirit come to life in the stories we
                  share.
                </p>
                <p>
                  Being a Mental Health Professional, is about belonging. It’s
                  about finding a community where your contribution in the life
                  of people ,matters ,and where every contribution — big or
                  small — makes an impact. Through our efforts, we’re inviting
                  more colleagues and young professionals to discover ,what it
                  means to be part of something bigger. Every new Mental Health
                  Professional is a light that beckons to those in need and a
                  welcomed member of our family. Each one brings new
                  friendships, fresh perspectives and even more reasons to keep
                  serving.
                </p>
                <p>
                  We are always desirous of blessings and guidance of our
                  seniors, who have taught us to work and serve the unhealthy
                  minds of the society.
                </p>
                <p>
                  This year’s <strong className="text-teal-800">CIPCON</strong>{" "}
                  in Raipur is a prime opportunity to peer exchange and
                  sharpening our skills.
                </p>
                <p>
                  This grand event will take place on{" "}
                  <strong className="text-teal-800">
                    September 25 to 27 ,2026
                  </strong>
                  at Raipur.
                </p>
                <p>
                  Now is the perfect time to start planning to make this event a
                  grand celebration.
                </p>
                <p>
                  Thank you for being part of this remarkable mission. Keep
                  bringing your best. Keep lifting others. And keep shining.
                </p>
                <p className="font-semibold text-teal-800">
                  Thanking you <br />Saurabh Tandon
                </p>
              </div>
              <div className="absolute bottom-8 right-10 text-8xl font-display text-teal-50 leading-none select-none rotate-180">
                "
              </div>
              <div className="mt-8 pt-6 border-t border-teal-50">
                <p className="font-display text-xl font-bold text-teal-800">
                  President, Central Zone, Indian Psychiatric Society
                </p>
                <p className="text-sm text-teal-500 font-accent mt-1">
                  CIPCON 2026
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
}
