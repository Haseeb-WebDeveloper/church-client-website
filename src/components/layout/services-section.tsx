import { Calendar, Clock } from "lucide-react";

const services = [
  {
    day: "Sundays",
    events: [
      { time: "10:00 A.M", name: "Sunday School" },
      { time: "10:45 A.M", name: "Breakfast & Fellowship" },
      { time: "11:00 A.M", name: "Praise & Worship Service" },
    ],
  },
  {
    day: "Tuesday",
    events: [{ time: "7:30 P.M", name: "Prayer Service" }],
  },
  {
    day: "Wednesday",
    events: [{ time: "7:30 P.M", name: "Bible Study" }],
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Church Services</h2>
          <p className="text-muted-foreground text-lg">
            We invite you to join us in worship and fellowship. Our services are designed 
            to celebrate God's love, explore His Word, and inspire your spiritual journey 
            in a welcoming and uplifting environment. Whether you're looking for a place 
            to deepen your faith, connect with a community, or simply explore spirituality, 
            you are welcome here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.day}
              className="group relative bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/90 hover:border-primary/20"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <Calendar className="h-5 w-5 text-primary" />
                  {service.day}
                </div>
                <div className="space-y-3">
                  {service.events.map((event) => (
                    <div
                      key={event.name}
                      className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      <Clock className="h-5 w-5 mt-0.5 text-primary/70" />
                      <div>
                        <span className="font-medium text-foreground">
                          {event.time}
                        </span>
                        <p>{event.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 