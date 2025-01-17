--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

-- Started on 2025-01-16 19:19:42

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4811 (class 1262 OID 16388)
-- Name: bookstore_db; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE bookstore_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';


\connect bookstore_db

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- TOC entry 4812 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16401)
-- Name: books; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.books (
    id integer NOT NULL,
    title character varying(500) NOT NULL,
    author character varying(255) NOT NULL,
    isbn character varying(255) NOT NULL,
    release_date timestamp with time zone NOT NULL,
    user_id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- TOC entry 219 (class 1259 OID 16400)
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4813 (class 0 OID 0)
-- Dependencies: 219
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


--
-- TOC entry 218 (class 1259 OID 16390)
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- TOC entry 217 (class 1259 OID 16389)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4814 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4647 (class 2604 OID 16404)
-- Name: books id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


--
-- TOC entry 4646 (class 2604 OID 16393)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4805 (class 0 OID 16401)
-- Dependencies: 220
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.books VALUES (1, 'La Ilíada', 'Homero', '9780140449136', '2003-05-28 19:00:00-05', 1, '2025-01-16 16:11:36.541-06', '2025-01-16 16:11:36.541-06');
INSERT INTO public.books VALUES (3, 'El lobo estapario', 'Hermann Hesse', '9780307743657', '1926-12-31 17:00:00-07', 3, '2025-01-16 16:22:00.813-06', '2025-01-16 16:22:00.813-06');
INSERT INTO public.books VALUES (4, 'Demian', 'Hermann Hesse', '9780307743650', '1918-12-31 17:23:24-06:36:36', 3, '2025-01-16 16:22:58.783-06', '2025-01-16 16:22:58.783-06');
INSERT INTO public.books VALUES (5, '1984', 'George Orwell', '9780451524935', '1949-08-06 00:00:00-06', 3, '2025-01-16 16:24:05.49-06', '2025-01-16 16:24:05.49-06');


--
-- TOC entry 4803 (class 0 OID 16390)
-- Dependencies: 218
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'David', 'GuidoD890@gmail.com', '$2a$10$i7kuHUfB0TRJLRpSPynOsOXZdwPdAbtZ0bVkEkb1pTQSDBeTGxkUK', '2025-01-16 15:07:18.256-06', '2025-01-16 15:07:18.256-06');
INSERT INTO public.users VALUES (2, 'Alejandro', 'AlejandroC890@gmail.com', '$2a$10$wW/xWkcjjfn.90TgYz4zGeR4vQq4tPeOjxxsEBwqsXQ57kJG31lr2', '2025-01-16 15:08:00.995-06', '2025-01-16 15:08:00.995-06');
INSERT INTO public.users VALUES (3, 'Jonathan', 'JonathanG890@gmail.com', '$2a$10$z6IWPSs6WKiKPVMXGqSjp.YbbcKQQ/f1nsIcEjdfFLhOzmTdK.7b2', '2025-01-16 15:10:08.273-06', '2025-01-16 15:10:08.273-06');
INSERT INTO public.users VALUES (4, 'Felipe', 'FelipeR890@gmail.com', '$2a$10$USIElVmGd0dSS7Yfx/fL9.HUQ9aazvepTAuO1CQTqOAQqZxMVxdF2', '2025-01-16 15:10:36.684-06', '2025-01-16 15:10:36.684-06');
INSERT INTO public.users VALUES (6, 'Juan', 'JuanR890@gmail.com', '$2a$10$PVRdLL2aZOEmRgL8LMmRG.301a1utmdo9NiC/94lYjiI/jokCJXAG', '2025-01-16 18:16:45.33-06', '2025-01-16 18:16:45.33-06');


--
-- TOC entry 4815 (class 0 OID 0)
-- Dependencies: 219
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.books_id_seq', 10, true);


--
-- TOC entry 4816 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- TOC entry 4653 (class 2606 OID 16410)
-- Name: books books_isbn_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_isbn_key UNIQUE (isbn);


--
-- TOC entry 4655 (class 2606 OID 16408)
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- TOC entry 4649 (class 2606 OID 16399)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 4651 (class 2606 OID 16397)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4656 (class 2606 OID 16411)
-- Name: books books_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2025-01-16 19:19:42

--
-- PostgreSQL database dump complete
--

