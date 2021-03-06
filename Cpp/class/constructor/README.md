# Constructor

```cpp
class Foo{
    public:
        int num;
};
...
Foo* a = new Foo(); // works well
```

Compiler automatically create constructor when it mets class with no constructor defined.

</br>

### **BUT**

```cpp
class Foo{
    public:
        int num;
        Foo(int arg){
            num = arg;
        };
};
...
Foo* a = new Foo(); // error
```

When there is constructor with parameter exists,  
compiler won't create basic constructor.

---

</br>   
   
## Constructor with initialization   
   
```cpp
class Foo{
    public:
        const int num;
        int& bar;
        Foo(int n, int& arg);
};

Foo::Foo(int n, int& arg) // ERROR
{
num = n;
bar = arg;
}

Foo::Foo(int n, int& arg)
:num(n), bar(arg){
}

````

Constructor that comes with colon ( `:` ) is the **initializer**

Such member with `const` and `&` **must be initialized with its declairtion**. So
```cpp
Foo::Foo(int n, int& arg)   // ERROR
{
    num = n;
    bar = arg;
}
````

This code is allocation, not initialization.

```cpp
Foo::Foo(int n, int& arg)``
:num(n), bar(arg){
}
```

This is initialization.

---

```cpp
Foo arrOfFoo[5];
```

initialize class instance with bracket will create an array of class instance with **call a construct function of every element of class** ( same syntax with java would leave empty spaces while Java returns a reference of array of classes `/*Java*/ Foo* arrOfFoo[5]`)

---

Due to a overloading of operation,

```cpp
class Foo{
    private:
        string name;
    public:
    Foo(string str){
        name = str;
    }
}
```

Such instance of class `Foo` and be initaialized as

```cpp
Foo a("Hello");
Foo b = "Hello"s;
```

What's up with the `s` at the suffix of `"Hello"` for `b`?  
normally, bare string `"Hello"` treated as `const char*` which is **string literal**.  
So explicitly add `s` at the back of string, will let compiler to treat it as `string` object, not `const char*`
