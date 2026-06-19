import {
    boolean,
    integer,
    pgTable,
    uuid,
    varchar,
    timestamp,
    pgEnum,
    text,
    decimal,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { UserRole } from "../modules/auth/user.types";

/* =========================
   ENUMS
========================= */

export const userRoleEnum = pgEnum("user_role", [
    "user",
    "admin",
]);

export const orderStatusEnum = pgEnum("order_status", [
    "Pending",
    "Shipped",
    "Delivered",
]);

export const paymentStatusEnum = pgEnum("payment_status", [
    "Pending",
    "Paid",
    "Failed"
]);


/* =========================
   USERS TABLE
========================= */

export const users = pgTable("users", {
    id: uuid("id").defaultRandom().primaryKey(),

    name: varchar("name", { length: 100 }).notNull(),

    username: varchar("username", { length: 50 }).unique(),

    email: varchar("email", { length: 255 }).notNull().unique(),

    phoneNumber: varchar("phone_number", { length: 20 }).unique(),

    password: varchar("password", { length: 255 }).notNull(),

    role: userRoleEnum("role")
        .$type<UserRole>()
        .default(UserRole.USER)
        .notNull(),

    verified: boolean("verified").default(false).notNull(),

    otp: varchar("otp", { length: 6 }),

    otpExpiry: timestamp("otp_expiry"),

    createdAt: timestamp("created_at").defaultNow().notNull(),

    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/* =========================
   PRODUCTS TABLE
========================= */

export const products = pgTable("products", {
    id: uuid("id").defaultRandom().primaryKey(),

    name: varchar("name", { length: 255 }).notNull(),

    description: text("description").notNull(),

    price: decimal("price", { precision: 10, scale: 2 }).notNull(),

    category: varchar("category", { length: 100 }).notNull(),

    stock: integer("stock").notNull(),

    imageUrl: text("image_url").notNull(),

    ratings: decimal("ratings", { precision: 3, scale: 2 })
        .default("0")
        .notNull(),

    numReviews: integer("num_reviews").default(0).notNull(),

    userId: uuid("user_id")
        .references(() => users.id, { onDelete: "cascade" })
        .notNull(),

    createdAt: timestamp("created_at").defaultNow().notNull(),

    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/* =========================
   ORDERS TABLE
========================= */

export const orders = pgTable("orders", {
    id: uuid("id").defaultRandom().primaryKey(),

    userId: uuid("user_id")
        .references(() => users.id, { onDelete: "cascade" })
        .notNull(),

    totalAmount: decimal("total_amount", {
        precision: 10,
        scale: 2,
    }).notNull(),

    fullName: varchar("full_name", { length: 100 }).notNull(),

    street: varchar("street", { length: 255 }).notNull(),

    city: varchar("city", { length: 100 }).notNull(),

    postalCode: varchar("postal_code", { length: 20 }).notNull(),

    country: varchar("country", { length: 100 }).notNull(),

    paymentMethod: varchar("payment_method", { length: 50 }).notNull().default("COD"),
    paymentStatus: paymentStatusEnum("payment_status")
        .default("Pending")
        .notNull(),

    status: orderStatusEnum("status").default("Pending").notNull(),

    createdAt: timestamp("created_at").defaultNow().notNull(),

    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/* =========================
   ORDER ITEMS TABLE
========================= */

export const orderItems = pgTable("order_items", {
    id: uuid("id").defaultRandom().primaryKey(),

    orderId: uuid("order_id")
        .references(() => orders.id, { onDelete: "cascade" })
        .notNull(),

    productId: uuid("product_id")
        .references(() => products.id, { onDelete: "cascade" })
        .notNull(),

    qty: integer("qty").notNull(),

    price: decimal("price", {
        precision: 10,
        scale: 2,
    }).notNull(),
});

/* =========================
   RELATIONS
========================= */

/* USER RELATIONS */
export const usersRelations = relations(users, ({ many }) => ({
    products: many(products),
    orders: many(orders),
}));

/* PRODUCT RELATIONS */
export const productsRelations = relations(products, ({ one, many }) => ({
    user: one(users, {
        fields: [products.userId],
        references: [users.id],
    }),

    orderItems: many(orderItems),
}));

/* ORDER RELATIONS */
export const ordersRelations = relations(orders, ({ one, many }) => ({
    user: one(users, {
        fields: [orders.userId],
        references: [users.id],
    }),

    items: many(orderItems),
}));

/* ORDER ITEM RELATIONS */
export const orderItemsRelations = relations(orderItems, ({ one }) => ({
    order: one(orders, {
        fields: [orderItems.orderId],
        references: [orders.id],
    }),

    product: one(products, {
        fields: [orderItems.productId],
        references: [products.id],
    }),
}));