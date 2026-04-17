import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CONTENT_SECTIONS = [
  {
    body: "We collect information you provide directly, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, and payment information.",
    title: "1. Information We Collect",
  },
  {
    body: "We use the information we collect to provide and improve our services, process transactions, send communications, and personalize your experience.",
    title: "2. How We Use Your Information",
  },
  {
    body: "We do not sell your personal information. We may share information with service providers who assist in our operations, or when required by law.",
    title: "3. Information Sharing",
  },
  {
    body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.",
    title: "4. Data Security",
  },
  {
    body: "You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time.",
    title: "5. Your Rights",
  },
  {
    body: "We use cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver targeted content. You can manage cookie preferences in your browser settings.",
    title: "6. Cookies and Tracking",
  },
  {
    body: "Our service may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.",
    title: "7. Third-Party Services",
  },
  {
    body: "Our services are not directed to children under 13. We do not knowingly collect personal information from children without parental consent.",
    title: "8. Children Privacy",
  },
  {
    body: "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.",
    title: "9. International Transfers",
  },
  {
    body: "We may update this privacy policy from time to time. We will notify you of significant changes by posting a notice on our website or sending you an email.",
    title: "10. Changes to This Policy",
  },
  {
    body: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.",
    title: "11. Data Retention",
  },
  {
    body: "If you have questions about this privacy policy or our data practices, please contact our privacy team through the support channels provided on our website.",
    title: "12. Contact Us",
  },
  {
    body: "This is a long section of text to test the outside scroll dialog. It should be long enough to cause the dialog to scroll outside the viewport.",
    title: "13. Long Section",
  },
  {
    body: "This is a long section of text to test the outside scroll dialog. It should be long enough to cause the dialog to scroll outside the viewport.",
    title: "14. Long Section",
  },
  {
    body: "This is a long section of text to test the outside scroll dialog. It should be long enough to cause the dialog to scroll outside the viewport.",
    title: "15. Long Section",
  },
  {
    body: "This is a long section of text to test the outside scroll dialog. It should be long enough to cause the dialog to scroll outside the viewport.",
    title: "16. Long Section",
  },
  {
    body: "This is a long section of text to test the outside scroll dialog. It should be long enough to cause the dialog to scroll outside the viewport.",
    title: "17. Long Section",
  },
  {
    body: "This is a long section of text to test the outside scroll dialog. It should be long enough to cause the dialog to scroll outside the viewport.",
    title: "18. Long Section",
  },
  {
    body: "This is a long section of text to test the outside scroll dialog. It should be long enough to cause the dialog to scroll outside the viewport.",
    title: "19. Long Section",
  },
  {
    body: "This is a long section of text to test the outside scroll dialog. It should be long enough to cause the dialog to scroll outside the viewport.",
    title: "20. Long Section",
  },
];

const DialogOutsideScrollDemo = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Dialog initialFocusEl={() => contentRef.current}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Open outside scroll dialog
        </Button>
      </DialogTrigger>
      <DialogPopup
        bottomStickOnMobile={false}
        className="sm:max-w-md my-16 max-h-none"
        id="dialog-outside-scroll-content"
        positionerClassName="overflow-y-auto items-start py-8"
      >
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>
            This layout allows the dialog to extend beyond the viewport while
            keeping the outer container scrollable.
          </DialogDescription>
        </DialogHeader>
        <DialogPanel
          className="grid gap-4"
          ref={(node: HTMLDivElement | null) => {
            contentRef.current = node;
          }}
        >
          {CONTENT_SECTIONS.map((section) => (
            <section className="grid gap-1" key={section.title}>
              <h4 className="font-medium text-sm">{section.title}</h4>
              <p className="text-muted-foreground text-sm">{section.body}</p>
            </section>
          ))}
        </DialogPanel>
      </DialogPopup>
    </Dialog>
  );
};

export default DialogOutsideScrollDemo;
