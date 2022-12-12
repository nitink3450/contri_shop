import Banner from "@components/Banner";
import { Button, Form, Input } from "antd";
import FormItem from "antd/lib/form/FormItem";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "./comp.module.scss";
const Comp = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.form}>
          <Form>
            <FormItem className={s.formWrapper}>
              <Input placeholder="Basic usage" /><br />
              <Button type="primary">Submit</Button>
            </FormItem>
          </Form>
        </div>
        <div className={s.box}>Box1</div>
        <div className={s.box}>Box2</div>
        <div className={s.box}>Box3</div>
        <div className={s.box}>Box4</div>
        <Link href="/">
          <a target="_blank">
            <div className={s.imageWrapper}>
              <Image alt="" height={100} width={100} src="/Images/logo.png" />
            </div>
          </a>
        </Link>
        <div className={s.BannerComp}>
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Comp;
