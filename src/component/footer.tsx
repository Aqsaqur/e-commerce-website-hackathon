import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
    <div className={styles.topSection}> 
        <h2 className={styles.supportHeading}>Still You Need Our Support?</h2>
        <p className={styles.supportText}>Don't wait, make a smart & logical quote here. It's pretty easy.</p>
        <div className={styles.subscriptionForm}>
        <div className="horizontal-line"> 
          <input type="email" placeholder="Enter Your Email" className={styles.emailInput} />
          <button className={styles.subscribeButton}>Subscribe Now</button>
        </div>
        </div>
      </div>

      <div className={styles.footerContent}> 
        {/* ... the rest of the footer content ... */}
      


<div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>Corporate clients and leisure travelers have been relying on Groundlink for dependable, and professional chauffeured car service in major cities across World.</p>
            <div className="mt-4">
              <p>Opening Hours</p>
              <p>Mon - Sat: 09:00 - 18:00</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/partners">Partners</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Help?</h3>
            <ul>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/terms">Term & Condition</Link></li>
              <li><Link href="/reporting">Reporting</Link></li>
              <li><Link href="/documentation">Documentation</Link></li>
              <li><Link href="/support">Support Policy</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
            <ul>
              <li>
                <Link href="/blog/fastfood-good-body">
                  Is fast food good for your body?
                </Link>
              </li>
              <li>
                <Link href="/blog/change-food-habit">
                  Change your food habit with organic food
                </Link>
              </li>
              <li>
                <Link href="/blog/fastfood-for-life">
                  Do you like fastfood for your life?
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</div>   
  )
};

export default Footer
