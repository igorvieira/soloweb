import { CheckIcon } from "@heroicons/react/24/outline";

const pricingPlans = [
  {
    name: "Community",
    price: "Free",
    description: "Perfect for individual developers and open source projects",
    features: [
      "Unlimited HTTP requests",
      "All request methods (GET, POST, PUT, DELETE, etc.)",
      "Request/Response history",
      "Environment variables",
      "Basic authentication",
      "Export/Import collections",
      "Offline functionality",
      "Community support"
    ],
    cta: "Download Free",
    popular: false,
    ctaLink: "/"
  },
  {
    name: "Pro",
    price: "$12",
    priceNote: "per user/month",
    description: "Advanced features for professional developers and small teams",
    features: [
      "Everything in Community",
      "Git integration & version control",
      "Test automation & CI/CD",
      "Team collaboration",
      "Advanced scripting",
      "Custom themes",
      "Priority email support",
      "Advanced debugging tools",
      "API monitoring",
      "Custom certificates"
    ],
    cta: "Start Free Trial",
    popular: true,
    ctaLink: "/"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Enterprise-grade features for large teams and organizations",
    features: [
      "Everything in Pro",
      "SSO & SAML integration",
      "Advanced security controls",
      "Audit logs & compliance",
      "Custom integrations",
      "Dedicated support manager",
      "SLA guarantees",
      "On-premise deployment",
      "Training & onboarding",
      "Custom feature development"
    ],
    cta: "Contact Sales",
    popular: false,
    ctaLink: "/"
  }
];

const PricingPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Choose the perfect plan for your needs. Start with our free Community edition,
          upgrade as you grow.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-gray-800 rounded-2xl p-8 ${plan.popular
              ? "ring-2 ring-purple-500 transform scale-105"
              : "border border-gray-700"
              }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.priceNote && (
                  <span className="text-gray-400 ml-2">{plan.priceNote}</span>
                )}
              </div>
              <p className="text-gray-300">{plan.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.popular
                ? "bg-purple-600 hover:bg-purple-700 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-300">
              Can I switch between plans?
            </h3>
            <p className="text-gray-300">
              Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-300">
              Is there a free trial for Pro?
            </h3>
            <p className="text-gray-300">
              Yes, we offer a 14-day free trial for the Pro plan with full access to all features.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-300">
              What payment methods do you accept?
            </h3>
            <p className="text-gray-300">
              We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-300">
              Can I use Solo offline?
            </h3>
            <p className="text-gray-300">
              Yes, Solo works completely offline. All plans include full offline functionality.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Join thousands of developers who trust Solo for their API development needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Download Free
          </button>
          <button className="px-8 py-3 border border-purple-300 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Start Pro Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
