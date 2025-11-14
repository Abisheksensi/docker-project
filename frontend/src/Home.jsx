import React from 'react';
import './health.css';

export default function Home() {
    return (
        <div className="health-app">
            <header className="hero">
                <div className="hero-inner">
                    <h1 className="title">Healthy Living</h1>
                    <p className="subtitle">Small changes. Big impact. Your guide to a healthier life.</p>
                    <a className="cta" href="#tips">Get Tips</a>
                </div>
                <img
                    className="hero-image"
                    alt="Healthy lifestyle"
                    src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=1200&q=80&auto=format&fit=crop"
                />
            </header>

            <main className="container" id="tips">
                <section className="cards">
                    <article className="card">
                        <img
                            alt="Nutrition"
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=60&auto=format&fit=crop"
                        />
                        <h3>Nutrition</h3>
                        <p>Eat a balanced diet rich in vegetables, fruits, whole grains and lean proteins.</p>
                    </article>

                    <article className="card">
                        <img
                            alt="Exercise"
                            src="https://images.unsplash.com/photo-1554284126-aa88f22d8d57?w=800&q=60&auto=format&fit=crop"
                        />
                        <h3>Exercise</h3>
                        <p>Aim for at least 30 minutes of moderate exercise most days of the week.</p>
                    </article>

                    <article className="card">
                        <img
                            alt="Mental health"
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=60&auto=format&fit=crop"
                        />
                        <h3>Mental Wellbeing</h3>
                        <p>Practice mindfulness, take breaks, and connect with friends and family.</p>
                    </article>
                </section>

                <section className="about">
                    <h2>Simple Habits to Start Today</h2>
                    <ul>
                        <li>Drink more water — aim for 6–8 glasses a day.</li>
                        <li>Walk after meals to aid digestion and improve circulation.</li>
                        <li>Prioritize sleep — most adults need 7–9 hours.</li>
                    </ul>
                </section>
            </main>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Healthy Living • Sample content for demo purposes</p>
            </footer>
        </div>
    );
}