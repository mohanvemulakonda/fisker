<p>Hello %%=v(@FirstName)=%%,</p>
    %%[
        /* Retrieve subscriber data from Data Extension */
        Set @SubscriberKey = AttributeValue("_subscriberkey")
        Set @FirstName = AttributeValue("FirstName")
        Set @ReservedCars = LookupRows("CarReservations", "SubscriberKey", @SubscriberKey)
        Set @NumReservedCars = RowCount(@ReservedCars)

        /* Determine which button text to display */
        If @NumReservedCars > 0 Then
            Set @ButtonText = "Order Now"
        Else
            Set @ButtonText = "Reserve Now"
        EndIf
    ]%%
    <><p>You have %%=v(@NumReservedCars)=%% car(s) reserved.</p><button type="button">%%=v(@ButtonText)=%%</button></>